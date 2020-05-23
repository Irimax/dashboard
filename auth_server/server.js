const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const colors = require('colors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const express = require('express');
const connectDB = require('./config/db');
const fileupload = require('express-fileupload');

// Load env vars
dotenv.config({ path: './config/.env' });

// Connect to database
connectDB();

// Route files
const dashboard = require('./routes/dashboard');
const card = require('./routes/card');
const auth = require('./routes/auth');
const users = require('./routes/users');
const errorHandler = require('./middleware/error');

const app = express();

app.use(cors());

app.disable('x-powered-by');
// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Sanitize data
app.use(mongoSanitize());

// File uploading
app.use(fileupload());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/dashboard', dashboard);
app.use('/api/v1/cards', card);
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);

app.use(errorHandler);

const { PORT, NODE_ENV, NODENAME } = process.env || 5000;
const PID = process.pid;

const server = app.listen(PORT, () =>
  console.log(
    `Welcome ${NODENAME} - Environement ${NODE_ENV} Started on PORT ${PORT} Pid - ${PID}`
      .underline.cyan,
  ),
);

//  Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
