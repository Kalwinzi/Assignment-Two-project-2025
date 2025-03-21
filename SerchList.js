// controllers/livestockController.js
exports.searchListings = async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;
  try {
    const query = {};
    if (category) query.category = category;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = minPrice;
      if (maxPrice) query.price.$lte = maxPrice;
    }
    const listings = await Livestock.find(query);
    res.status(200).json({ success: true, data: listings });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
