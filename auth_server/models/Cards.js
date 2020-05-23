const mongoose = require('mongoose');
const slugify = require('slugify');

const CardsSchema = new mongoose.Schema({
  titleProject: {
    type: String,
    required: [true, 'Please add a name project'],
    unique: true,
    maxlength: [20, 'Name project'],
  },
  slug: String,
  inProgress: {
    type: Boolean,
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [300, 'Description can not be more than 500 characters'],
  },

  bigDescription: {
    type: String,
    maxlength: [500, 'Description can not be more than 500 characters'],
  },
  linkWebSite: {
    type: String,
    required: [true, 'Please add website project'],
  },
  image: {
    type: String,
    default: 'no-image.png',
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Cards slug from the name
CardsSchema.pre('save', function (next) {
  this.slug = slugify(this.titleProject, { lower: true });
  next();
});

module.exports = mongoose.model('Cards', CardsSchema);
