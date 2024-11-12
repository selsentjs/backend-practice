const con = require("../Databases/connection");

// get all the products
const getAllProducts = (req, res) => {
  try {
    const sql = "SELECT productID,name,color, size, price FROM product";
    con.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error creating product" });
      }
      res.status(200).json(result);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating product" });
  }
};

// get single product
const getSingleProduct = (req, res) => {
  const { id } = req.params;
  // Ensure the ID is provided in the request
  if (!id) {
    return res.status(400).json({ message: "Product ID is required" });
  }
  try {
    const sql = "SELECT productID,name,color,size,price FROM product WHERE productID=?";

    con.query(sql, [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating product" });
      }
      res.status(200).json(result);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating product" });
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
        product: { name, color, size, price, productID: result.insertId },
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating product" });
  }
};

// update product
const updateProduct = (req, res) => {
    const { id } = req.params;
    let { name, color, size, price } = req.body;
  
    if (!id) {
      return res.status(400).json({ message: "No Product with this ID" });
    }
  
    try {
      const sql = "UPDATE product SET name = ?, color = ?, size = ?, price = ? WHERE productID = ?";
  
      // Execute query
      con.query(sql, [name, color, size, price, id], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ msg: "Error updating product" });
        }  
        
        res.status(200).json({
          msg: "Product updated successfully",
          updatedProduct: {
            productID: id,
            name,
            color,
            size,
            price
          }
        });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Error updating product" });
    }
  };
  

// delete product
const deleteProduct = (req, res) => {
    const {id} = req.params
  try {
    const sql = "DELETE FROM product WHERE productID = ?"
    
    con.query(sql,[id], (err) => {
        if(err){
            res.status(500).json({msg:"error to delete the product"})
        }
        res.status(200).json({msg:'Product deleted successfully'})
    })
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
