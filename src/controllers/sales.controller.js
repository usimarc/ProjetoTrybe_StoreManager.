const SalesService = require('../services/sales.service');

const salesGetAll = async (_req, res) => {
  const { message } = await SalesService.salesGetAll();
  return res.status(200).json(message);
};

const salesGetById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await SalesService.salesGetById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  salesGetAll,
  salesGetById,
};