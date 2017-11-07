const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const PORT = process.env.PORT || 8888;
const routes = require('./routes');

const app = express();
<<<<<<< HEAD
// enableing json body-parser and encoding
=======

// enabling json body-parser and encoding 
>>>>>>> development
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : false }));

app.use('/api', routes);

app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server listening on port: ${PORT}`);
});
