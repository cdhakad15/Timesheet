// backend/controllers/ratingController.js

import Rating from '../models/rating.model.js';

// Controller to handle rating-related operations

// Rate an employee
export const rateEmployee = async (req, res) => {
  try {
    const { employee, rating } = req.body;
    
    // Check if the rating is within the valid range (1 to 5)
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Invalid rating. Rating must be between 1 and 5.' });
    }

    // Check if the employee has already been rated for the given date
    const existingRating = await Rating.findOne({ employee, date: req.body.date });
    if (existingRating) {
      return res.status(400).json({ message: 'Employee has already been rated for this date.' });
    }

    const newRating = new Rating({
      employee,
      rating,
      date: req.body.date
    });

    await newRating.save();
    res.status(201).json(newRating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all ratings for a specific employee
export const getEmployeeRatings = async (req, res) => {
  const { employeeId } = req.params;
  try {
    const ratings = await Rating.find({ employee: employeeId });
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};