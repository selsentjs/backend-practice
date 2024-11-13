const Review = require("../Model/Review");

// get all reviews
const getAllReviews = async (req, res) => {
  try {
    try {
      const review = await Review.find({});
      res.status(200).json(review);
    } catch (err) {
      res.status(500).json({ msg: "server error" });
    }
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};

// get single review
const getSingleReview = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.send("Enter id");
  }
  try {
    const review = await Review.findOne({ _id: id });
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};

// create review
const createReview = async (req, res) => {
  const { rating, comment, product_id } = req.body;
   // Validate required fields
   if (!rating || !comment || !product_id) {
    return res.status(400).json({ message: 'Rating, comments, and product_id are required.' });
  }
  console.log("res", req.body);
  try {
    const review = new Review({
      rating,
      comment,
      product_id
      
    });

    console.log("review", review);
    await review.save();
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update review
const updateReview = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.send("Please provide id");
  }
  try {
    // Find the review by its ID
    const review = await Review.findById(id);

    // If no review is found, send a response
    if (!review) {
      return res.status(404).send("No review found with this id");
    }
    // Update the review with the new values from the request body
    review.set(req.body);

    // Save the updated review
    await review.save();

    res.status(200).json({ msg: `review updated`, review });
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};

// delete review
const deleteReview = async (req, res) => {
  const { id: id } = req.params;
  try {
    const review = await Review.deleteOne({ _id: id });
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
};
