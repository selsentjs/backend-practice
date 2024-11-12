const con = require("../Databases/connection");

// get all the products
const getAllProducts = (req, res) => {
  try {
    res.status(200).json("products");
  } catch (err) {
    console.log(err);
  }
};

// get single product
const getSingleProduct = (req, res) => {
  try {
    res.status(200).json("single products");
  } catch (err) {
    console.log(err);
  }
};

// create product
const createProduct = (req, res) => {
  try {
    const { name, color, size, price } = req.body;
    const sql = "INSERT INTO product(name,color,size,price) VALUES(?,?,?,?)";
    const values = [name, color, size, price];
    con.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error creating product" });
      }
      res.status(200).json({
        message: `Product created successfully`,
        product: { name, color, size, price, productID: result.insertId }
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating product" });
  }
};

// update product
const updateProduct = (req, res) => {
  try {
    res.status(200).json("update products");
  } catch (err) {
    console.log(err);
  }
};

// delete product
const deleteProduct = (req, res) => {
  try {
    res.status(200).json("delete products");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
