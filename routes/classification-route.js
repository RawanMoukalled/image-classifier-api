require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node-gpu');
var express = require('express');
var router = express.Router();
var toxicity = require('@tensorflow-models/toxicity');

// define the home page route
router.get('/', function (req, res) {
  res.send('Classification homepage');
})

router.post('/', async function (req, res) {
  console.log('here');
  
  let model = await toxicity.load(0.9);
  const sentences = ['you are stupid'];
  let predictions = await model.classify(sentences);
  res.send({predictions});
});

module.exports = router;