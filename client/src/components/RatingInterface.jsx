// frontend/src/components/RatingInterface.js

import React, { useState } from 'react';
import axios from 'axios';

const RatingInterface = ({ employeeId }) => {
  const [rating, setRating] = useState(1); // Default rating value
  const [isLoading, setIsLoading] = useState(false);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleRatingSubmit = async () => {
    try {
      setIsLoading(true);
      // Make a POST request to submit the rating
      await axios.post('http://localhost:3000/ratings/rate', {
        employee: employeeId,
        rating: rating
      });
      // Reset rating state after successful submission
      setRating(1);
      setIsLoading(false);
      alert('Rating submitted successfully!');
    } catch (error) {
      setIsLoading(false);
      console.error('Error submitting rating:', error);
      alert('Failed to submit rating. Please try again.');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Rate Employee</h3>
      <div className="flex items-center">
        <label htmlFor="rating" className="mr-2">Rating:</label>
        <select id="rating" value={rating} onChange={handleRatingChange} className="border rounded py-1 px-2">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button onClick={handleRatingSubmit} disabled={isLoading} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded disabled:opacity-50">
        {isLoading ? 'Submitting...' : 'Submit Rating'}
      </button>
    </div>
  );
};

export default RatingInterface;