const UnitService = require('../services/unit.service');

const getAllUnits = async (req, res) => {
  const result = await UnitService.getAll();
  res.json(result);
};

const getUnitById = async (req, res) => {
  const result = await UnitService.getById(req.params.id);
  res.json(result);
};

const createUnit = async (req, res) => {
  const result = await UnitService.create(req.body);
  res.json(result);
};

const updateUnit = async (req, res) => {
  const result = await UnitService.update(req.params.id, req.body);
  res.json(result);
};

const deleteUnit = async (req, res) => {
  const result = await UnitService.delete(req.params.id);
  res.json(result);
};

module.exports = {
  getAllUnits,
  getUnitById,
  createUnit,
  updateUnit,
  deleteUnit,
};
