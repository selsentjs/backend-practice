const con = require("../Databases/connection");

// get all the reviews
const getAllReviews = (req, res) => {
  try {
    const sql = "SELECT reviewID,review FROM reviews";
    con.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error creating review" });
      }
      res.status(200).json(result);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating review" });
  }
};

// get single reviews
const getSingleReview = (req, res) => {
  const { id } = req.params;
  // Ensure the ID is provided in the request
  if (!id) {
    return res.status(400).json({ message: "review ID is required" });
  }
  try {
    const sql = "SELECT reviewID,review FROM reviews WHERE reviewID=?";

    con.query(sql, [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating review" });
      }
      res.status(200).json(result);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating review" });
  }
};

// create reviews
const createReview = (req, res) => {
  try {
    const { review,productID } = req.body;
    const sql = "INSERT INTO reviews(review,productID) VALUES(?,?)";
    const values = [review,productID];
    con.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error creating review" });
      }
      res.status(200).json({
        message: `review created successfully`,
        product: { review, reviewID: result.insertId },
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating review" });
  }
};

// update review
const updateReview = (req, res) => {
    const { id } = req.params;
    let { review } = req.body;
  
    if (!id) {
      return res.status(400).json({ message: "No review with this ID" });
    }
  
    try {
      const sql = "UPDATE reviews SET review=? WHERE reviewID = ?";
  
      // Execute query
      con.query(sql, [review,id], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ msg: "Error updating review" });
        }  
        
        res.status(200).json({
          msg: "review updated successfully",
          updatedReview: {
            ReviewID: id,
            review
          }
        });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Error updating review" });
    }
  };
  

// delete reviews
const deleteReview = (req, res) => {
    const {id} = req.params
  try {
    const sql = "DELETE FROM reviews WHERE reviewID = ?"
    
    con.query(sql,[id], (err) => {
        if(err){
            res.status(500).json({msg:"error to delete the review"})
        }
        res.status(200).json({msg:'Review deleted successfully'})
    })
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
};
