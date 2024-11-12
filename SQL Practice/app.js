require("dotenv").config();

const express = require("express");
require("./Databases/connection");
const productDetails = require("./Routes/productRoute");
const reviewDetails = require("./Routes/reviewRoute");

const app = express();

app.use(express.json());

// display product details
app.use("/product", productDetails);

// display review details
app.use("/review", reviewDetails);


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
