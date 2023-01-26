require('dotenv').config();

const mongoose = require('mongoose').set('strictQuery', true);

const { MONGO_URL, PORT = 3000 } = process.env;
const app = require('./src/app');

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, function () {
      console.log(`Database connection successful`);
    });
  })
  .catch(err => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });
