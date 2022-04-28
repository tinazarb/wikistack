const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false,
});
const { STRING, TEXT } = Sequelize;

const Page = db.define('page', {
  title: { type: STRING, allowNull: false },
  slug: { type: STRING, allowNull: false },
  content: { type: TEXT, allowNull: false },
  status: Sequelize.ENUM('open', 'closed'),
});

const User = db.define('user', {
  name: { type: STRING, allowNull: false },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  hashedPassword: {
    type: STRING(64),
    validate: {
      is: /^[0-9a-f]{64}$/i,
    },
  },
});

module.exports = { db, Page, User };
