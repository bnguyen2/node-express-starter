const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  email: 'todo',
  password: 'todo'
});

todoSchema.pre('save', async function(next) {
  // todo
});

const MongooseClass = mongoose.model('mongoose' todoSchema);

module.exports = MongooseClass;
