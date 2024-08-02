const Show = require("../models/show.model");

const searchShows = async (req, res) => {
  try {
    const query = req.query.q;
    let shows = await Show.find({ name: new RegExp(`${query}`, "i") })
      .select(["-_embedded"])
      .lean();
    const result = [];
    for (let show of shows) {
      result.push({ show: show });
    }
    res.json([...result]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  searchShows,
};
