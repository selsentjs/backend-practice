const con = require('../Databases/connection')

// get all the reviews
const getAllReviews = (req,res) => {
    try{
        res.status(200).json('reviews')
    }
    catch(err) {
        console.log(err)
    }

}

// get single review
const getSingleReview = (req,res) => {
    try{
        res.status(200).json('single review')
    }
    catch(err) {
        console.log(err)
    }

}

// create review
const createReview = (req,res) => {
    try{
        res.status(200).json('create review')
    }
    catch(err) {
        console.log(err)
    }

}

// update review
const updateReview = (req,res) => {
    try{
        res.status(200).json('update review')
    }
    catch(err) {
        console.log(err)
    }

}

// delete review
const deleteReview = (req,res) => {
    try{
        res.status(200).json('delete review')
    }
    catch(err) {
        console.log(err)
    }

}

module.exports = {
    getAllReviews,
    getSingleReview,
    createReview,
    updateReview,
    deleteReview
}