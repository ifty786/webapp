const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!. This is my demo Web-app. I am Ibraheem son of Iftikhar Ahmed');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
