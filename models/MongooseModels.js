const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  email: String,
  password: String
});

todoSchema.pre('save', async function(next) {
  // todo
});

const MongooseClass = mongoose.model('todo', todoSchema);

module.exports = MongooseClass;
