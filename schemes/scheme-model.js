const knex = require('knex');
const db = knex(require('../knexfile').development);

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

function find() {
  return "qq";
}

function findById() {

}

function findSteps() {

}

function add() {

}

function update() {

}

function remove() {
  
}