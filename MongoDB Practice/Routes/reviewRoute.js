const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const {
    getAllReviews,
    getSingleReview,
    createReview,
    updateReview,
    deleteReview
} = require('../Controllers/ReviewController')

router.get('/', getAllReviews);
router.get('/:id', getSingleReview)
router.post('/', createReview)
router.put('/:id', updateReview)
router.delete('/:id', deleteReview)


module.exports = router