const knex = require("../db/connection");

function list() {
  return knex("todos").select("*");
};

function create(todo) {
  return knex("todos")
    .insert(todo)
    .returning("*")
    .then((newTodo) => newTodo[0]);
};

function read(id) {
  return knex("todos").select("*").where({ todo_id: id }).first();
};

function update(updatedTodo) {
  return knex("todos")
    .select("*")
    .where({ todo_id: updatedTodo.todo_id })
    .update(updatedTodo, "*");
};

function destroy(id) {
  return knex("todos").where({ todo_id: id }).del();
};

module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
};
