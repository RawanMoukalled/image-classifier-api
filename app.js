var express = require('express');
var classificationRoute = require('./routes/classification-route');
const app = express();

const cors = require('cors');
const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));


app.use(express.json());

app.listen(process.env.PORT || 3000, function () {
 console.log("App listening on port 3000!");
});

app.use('/', classificationRoute)