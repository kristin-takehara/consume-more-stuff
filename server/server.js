const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8888;

const app = express();

app.use(bodyParser.urlencoded({ "extended" : true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
