// controllers/livestockController.js
exports.getAllListings = async (req, res) => {
  try {
    const listings = await Livestock.find().populate('seller', 'name email');
    res.status(200).json({ success: true, data: listings });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
