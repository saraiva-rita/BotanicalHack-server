const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/jwt.middleware');
// Requiring Models
const Plants = require('../models/Plants.model');
const Review = require('../models/Review.model');
const User = require('../models/User.model');

// GET ROUTE to display all Plants in the Database
router.get('/plants', async (req, res) => {
  try {
    // Get all Plants from our Database via .find() method
    let plantsFromDB = await Plants.find();
    res.json(plantsFromDB);
  } catch {
    (error) => res.json(error);
  }
});

// GET Route to display info about a specific Plant
router.get('/plants/:plantId', isAuthenticated, async (req, res) => {
  try {
    const { plantId } = req.params;
    let isMyPlant;
    let isWish;

    const currentUser = req.payload;
    const thisUser = await User.findById(currentUser._id);
    if (thisUser.myPlants.includes(`${plantId}`)) {
      isMyPlant = true;
    }
    if (thisUser.wishList.includes(`${plantId}`)) {
      isWish = true;
    }

    // Find Plant via its Id inside the Database
    let foundPlant = await Plants.findById(plantId);

    // populate the plants with reviews and reviews with authors
    await foundPlant.populate({
      path: 'reviews',
      populate: {
        path: 'author',
        model: 'User',
      },
    });
    res.json(foundPlant, isMyPlant, isWish);
  } catch {
    (error) => res.json(error);
  }
});

// ADD Plants to MyPlants
router.post(
  '/plants/:plantId/addMyPlants',
  isAuthenticated,
  async (req, res) => {
    const { plantId } = req.params;
    const currentUser = req.payload;
    try {
      const user = await User.findById(currentUser._id);
      const myPlant = await User.findByIdAndUpdate(currentUser._id, {
        $push: { myPlants: plantId },
      });
      res.json(myPlant);
    } catch {
      (error) => res.json(error);
    }
  }
);

// Remove MyPlants from plant details
router.delete(
  '/plants/:plantId/removeMyPlants',
  isAuthenticated,
  async (req, res) => {
    const { plantId } = req.params;
    const currentUser = req.payload;
    try {
      await User.findById(currentUser._id);
      const myPlant = await User.findByIdAndUpdate(currentUser._id, {
        $pull: { myPlants: plantId },
      });
      res.json(myPlant);
    } catch {
      (error) => res.json(error);
    }
  }
);

// Remove myPlants from My Plants Page
router.post(
  '/myPlants/removeMyPlants/:plantId',
  isAuthenticated,
  async (req, res) => {
    const { plantId } = req.params;
    const currentUser = req.payload;

    try {
      await User.findById(currentUser._id);
      const myPlant = await User.findByIdAndUpdate(currentUser._id, {
        $pull: { myPlants: plantId },
      });
      res.json(myPlant);
    } catch {
      (error) => res.json(error);
    }
  }
);

// ADD Plants to WishList
router.post(
  '/plants/addToWishList/:plantId',
  isAuthenticated,
  async (req, res) => {
    const { plantId } = req.params;
    const currentUser = req.payload;
    try {
      const user = await User.findById(currentUser._id);
      const myWish = await User.findByIdAndUpdate(currentUser._id, {
        $push: { wishList: plantId },
      });
      res.json(myWish);
    } catch {
      (error) => res.json(error);
    }
  }
);

// Remove WishedPlant from plant details
router.delete(
  '/plants/:plantId/removeFromWishList',
  isAuthenticated,
  async (req, res) => {
    const { plantId } = req.params;
    const currentUser = req.payload;
    try {
      await User.findById(currentUser._id);
      const myWish = await User.findByIdAndUpdate(currentUser._id, {
        $pull: { wishList: plantId },
      });
      res.json(myWish);
    } catch {
      (error) => res.json(error);
    }
  }
);

// Remove WishedPlant from Wish List page
router.post(
  '/wishList/removeMyPlants/:plantId',
  isAuthenticated,
  async (req, res) => {
    const { plantId } = req.params;
    const currentUser = req.payload;

    try {
      await User.findById(currentUser._id);
      const myWish = await User.findByIdAndUpdate(currentUser._id, {
        $pull: { wishList: plantId },
      });
      res.json(myWish);
    } catch {
      (error) => res.json(error);
    }
  }
);

// ADD REVIEWS
router.post(
  '/plants/:plantId/createReview',
  isAuthenticated,
  async (req, res) => {
    try {
      const { plantId } = req.params;
      const { content, rating, author } = req.body;
      const currentUser = req.payload;
      const newReview = await Review.create({ content, rating, author });

      // update the plant with new review that was created
      const plantReviewed = await Plants.findByIdAndUpdate(plantId, {
        $push: { reviews: newReview._id },
      });

      // update the review with the author
      await Review.findByIdAndUpdate(newReview._id, {
        $push: { author: currentUser._id },
      });

      // update the user with the review
      await User.findByIdAndUpdate(currentUser._id, {
        $push: { reviews: newReview._id },
      });

      // add rating to reviews
      const plantUpdated = await Plants.findById(plantId);
      await plantUpdated.populate('reviews');

      // calculate and update the average rating of all reviews
      const plantAverageRating = (
        plantUpdated.reviews.reduce(
          (accumulator, currentValue) => accumulator + currentValue.rating,
          0
        ) / plantUpdated.reviews.length
      ).toFixed(1);

      await Plants.findByIdAndUpdate(plantId, { rating: plantAverageRating });

      res.json(plantReviewed);
    } catch {
      (error) => res.json(error);
    }
  }
);

// DELETE REVIEWS
router.post(
  '/plants/:plantId/:reviewId/deleteReview',
  isAuthenticated,
  async (req, res) => {
    const { plantId, reviewId } = req.params;
    const currentUser = req.payload;
    try {
      await Review.findByIdAndRemove(reviewId);

      // update the Plant Detail Page after remove the review
      const plantReviewed = await Plants.findByIdAndUpdate(plantId, {
        $pull: { reviews: reviewId },
      });

      // remove the review from the user
      await User.findByIdAndUpdate(currentUser._id, {
        $pull: { reviews: reviewId },
      });

      // update rating to reviews
      const plantUpdated = await Plants.findById(plantId);

      const plantAverageRating = (
        plantUpdated.reviews.reduce(
          (accumulator, currentValue) => accumulator + currentValue.rating,
          0
        ) / plantUpdated.reviews.length
      ).toFixed(1);

      await Plants.findByIdAndUpdate(plantId, { rating: plantAverageRating });
      res.json(plantReviewed);
    } catch {
      (error) => res.json(error);
    }
  }
);

module.exports = router;
