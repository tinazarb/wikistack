const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app._router.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send('hello world');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
