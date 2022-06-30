const express = require("express");
const app = express();
const product = require('./app/product');
const PORT = 8000;

app.use(product);
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));