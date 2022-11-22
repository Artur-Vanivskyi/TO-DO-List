const service = require("./todos.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const data = await service.list();
  res.json({ data });
};

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
};

async function read(req, res, next) {
  const { id } = req.params;
  const data = await service.read(id);
  res.json({ data });
};

async function update(req, res, next) {
  const { id } = req.params;
  const updatedTodo = {
    ...req.body.data,
    todo_id: id,
  };
  const data = await service.update(updatedTodo);
  res.json({ data });
};

async function destroy(req, res, next) {
  const { id } = req.params;
  const data = await service.delete(id);
  res.status(204).json({ data });
};

module.exports = {
  list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create),
  read: asyncErrorBoundary(read),
  update: asyncErrorBoundary(update),
  delete: asyncErrorBoundary(destroy),
};
