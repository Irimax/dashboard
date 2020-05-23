// @Desc        Get dashboard
// @Route       GET /api/v1/dashboard
// @access      Public
exports.getDashboard = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show auth dashboard' });
};
