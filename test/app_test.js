const assert = require('assert');
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index');
const mongoose = require('mongoose');

const helperFuncs = require('../utils/helperfuncs');

const User = require('../models/UserModal');

describe('App', () => {
  let token = null;

  before(done => {
    mongoose.connect('mongodb://localhost/proj1', () => {
      mongoose.connection.db.dropDatabase(() => done());
    });
  });
});
