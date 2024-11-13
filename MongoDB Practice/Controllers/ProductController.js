const Product = require("../Model/Product");

// get all products
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};

// get single product
const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.send("Enter id");
  }
  try {
    const product = await Product.findOne({ _id: id });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};

// create product
const createProduct = async (req, res) => {
  const { name, color, size, price } = req.body;
  if (!name || !color || !size || !price) {
    return res.send("All the fields are required");
  }
  try {
    const product = new Product({
      name,
      color,
      size,
      price,
    });
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.send("Please provide id");
  }
  try {
    // Find the product by its ID
    const product = await Product.findById(id);

    // If no product is found, send a response
    if (!product) {
      return res.status(404).send("No product found with this id");
    }
    // Update the product with the new values from the request body
    product.set(req.body);

    // Save the updated product
    await product.save();

    res.status(200).json({ msg: `product updated`, product });
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};

// delete product
const deleteProduct = async (req, res) => {
  const { id:id } = req.params;
  try {
    const product = await Product.deleteOne({ _id: id });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
