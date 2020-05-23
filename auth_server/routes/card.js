const express = require('express');
const {
  getCard,
  getCards,
  getAllCards,
  createCard,
  updateCard,
  deleteCard,
  cardPhotoUpload,
} = require('../controllers/card');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getCards)
  .post(protect, authorize('publisher', 'admin'), createCard);
router.route('/all').get(getAllCards);
router
  .route('/:id/photo')
  .put(protect, authorize('publisher', 'admin'), cardPhotoUpload);

router
  .route('/:id')
  .get(getCard)
  .put(protect, authorize('publisher', 'admin'), updateCard)
  .delete(protect, authorize('publisher', 'admin'), deleteCard);

module.exports = router;
