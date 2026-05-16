const { getMetrics } = require('../data/metricsStore');

const getLatestMetrics = (req, res) => {
  return res.status(200).json({
    count: getMetrics().length,
    data: getMetrics()
  });
};

module.exports = {
  getLatestMetrics
};