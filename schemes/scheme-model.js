const knex = require("knex");
const db = knex(require("../knexfile").development);

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.id")
    .where({ id });
}

function findSteps(idOfScheme) {
  return db("steps")
    .join("schemes", "schemes.id", "scheme_id")
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .where("scheme_id", idOfScheme);
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(([id]) => this.findById(id));
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(status => (status > 0 ? this.findById(id) : null));
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
