let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let methodOverride = require('method-override');

let scale = require('./example');
let logger = require('./logging');

let status_s = scale.status.lb2.slice(1, 4);
let status_u = scale.status.lb2.slice(4, 8);
let weight = scale.weight;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

let router = express.Router();

let data = require('./data');

router.get('/weight', (req, res) => {

  let result = data(status_s, status_u, weight);
  logger.log({
    level: 'info',
    message: result
  });
  res.status(200).jsonp(result);
});

app.use(router);

app.listen(3000, () => {
  console.log('Server is runing!');
});