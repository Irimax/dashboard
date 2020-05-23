const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Cards = require('../models/Cards');

// @Desc        Get all cards
// @Route       GET /api/v1/cards
// @access      Public
exports.getCards = asyncHandler(async (req, res, next) => {
  const cards = await Cards.find();
  res.status(200).json({ success: true, data: cards });
});

// @Desc        Get all cards
// @Route       GET /api/v1/cards/all
// @access      Private
exports.getAllCards = asyncHandler(async (req, res, next) => {
  const cards = await Cards.find();
  res.status(200).json({ success: true, data: cards });
});

// @Desc        Get single card by id
// @Route       GET /api/v1/cards/:id
// @access      Private
exports.getCard = asyncHandler(async (req, res, next) => {
  const cards = await Cards.findById(req.params.id);
  if (!cards) {
    return next(
      next(
        new ErrorResponse(`Card not found with id of ${req.params.id}`, 404),
      ),
    );
  }
  res.status(200).json({ success: true, data: cards });
});

// @Desc        Create card
// @Route       POST /api/v1/cards
// @access      Private
exports.createCard = asyncHandler(async (req, res, next) => {
  //  Add user to req.body
  req.body.user = req.user.id;

  //  Check for published cards
  const publishedCard = await Cards.findOne({ user: req.user.id });

  //  If the user is not an admin, theycan only add one card
  if (publishedCard && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `The user with ID ${req.user.id} has already published a card`,
        400,
      ),
    );
  }

  const cards = await Cards.create(req.body);
  res.status(201).json({
    success: true,
    data: cards,
  });
});

// @Desc        Update card by id
// @Route       PUT /api/v1/cards/:id
// @access      Private
exports.updateCard = asyncHandler(async (req, res, next) => {
  let cards = await Cards.findById(req.params.id);

  if (!cards) {
    return next(
      new ErrorResponse(`Card not found with id of ${req.params.id}`, 404),
    );
  }

  //  Make sure user is card owner
  if (cards.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this card`,
        401,
      ),
    );
  }

  cards = await Cards.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: cards });
});

// @Desc        Delete card by id
// @Route       DELETE /api/v1/cards/:id
// @access      Private
exports.deleteCard = asyncHandler(async (req, res, next) => {
  const cards = await Cards.findById(req.params.id);
  if (!cards) {
    return next(
      next(
        new ErrorResponse(`Card not found with id of ${req.params.id}`, 404),
      ),
    );
  }
  //  Make sure user is card owner
  if (cards.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to delete this card`,
        401,
      ),
    );
  }
  cards.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      Upload photo for card
// @route     PUT /api/v1/cards/:id/photo
// @access    Private
exports.cardPhotoUpload = asyncHandler(async (req, res, next) => {
  const cards = await Cards.findById(req.params.id);

  if (!cards) {
    return next(
      new ErrorResponse(`cards not found with id of ${req.params.id}`, 404),
    );
  }

  //  Make sure user is card owner
  if (cards.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to delete this card`,
        401,
      ),
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400,
      ),
    );
  }

  // Create custom filename
  file.name = `photo_${cards._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Cards.findByIdAndUpdate(req.params.id, { image: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
