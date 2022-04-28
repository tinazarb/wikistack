const router = require('express');
const express = require('express');
const morgan = require('morgan');
const app = express();
const { db, Page, User } = require('./models');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

app._router.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.redirect('/wiki');
});

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

db.authenticate().then(() => {
  console.log('connected to the database');
});

init();

module.exports = 'app.js';
