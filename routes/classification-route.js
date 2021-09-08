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
  let sentences = ['you are stupid'];
  sentences = req.body || sentences;
  let predictions = await model.classify(sentences);
  res.send({sentences, predictions});
});

module.exports = router;