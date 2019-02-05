let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

let router = express.Router();

let data = require('./data');

router.get('/weigth', (req, res) => {
  res.status(200).jsonp(data);
});

app.use(router);

app.listen(3000, () => {
  console.log('Server is runing!');
});