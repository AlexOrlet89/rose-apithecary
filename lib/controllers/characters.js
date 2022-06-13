const { Router } = require('express');
const Character = require('../models/Character');
module.exports = Router().get('/', async (req, res) => {
  const char = await Character.getAll();
  console.log(char);
  res.json(char);
});
