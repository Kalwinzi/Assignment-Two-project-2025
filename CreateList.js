// controllers/livestockController.js
const Livestock = require('../models/Livestock');

exports.createListing = async (req, res) => {
  const { name, category, price, age } = req.body;
  try {
    const livestock = await Livestock.create({ name, category, price, age, seller: req.user.id });
    res.status(201).json({ success: true, data: livestock });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
