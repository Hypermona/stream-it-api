const Show = require("../models/show.model");

const getShows = async (req, res, next) => {
  try {
    const page = req.query.page || 0;
    const limit = 10;

    const offset = page * limit;
    const shows = await Show.find({})
      .skip(offset)
      .select(["-_embedded"])
      // .sort({ createdAt: -1 })
      .limit(limit)
      .exec();
    res.json(shows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getShowById = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const show = await Show.findOne({ id: +id });
      res.json(show);
    } else {
      res.status(404).json([]);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const bulkAddShows = async (req, res) => {
  try {
    const data = req.body;
    const shows = await Show.insertMany(data);
    res.json(shows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getShowById,
  getShows,
  bulkAddShows,
};
