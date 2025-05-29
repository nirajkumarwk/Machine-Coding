// StarRating.js

import React, { useState } from 'react';

function StarRating() {
  // Step 1: Create state variables
  const STARS = 5;
  const [rating, setRating] = useState(0);

  const handleStar = (index) => {
   setRating(index+1)
  }
  console.log('rating',rating)

  // use `rating` to store the selected rating, and `setRating` to update it

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 className='font-bold'>Star Rating</h1>
      <h3 className='mb-3'>by NamasteDev</h3>

      {/* Step 2: Render 5 stars using a loop ★★★★★ */
      Array.from({length: STARS}).map((_, index) => {
        return (
      <span key={index} onClick={() => handleStar(index)} className={`w-10 text-4xl h-10 ${index+1 <= rating ? 'text-[#ffd700]': 'text-[#cccc]'}`}>★
      </span>
        )
      })
      }
      {/* Step 3: Update rating when a star is clicked */}
      {/* Step 4: Style stars based on rating */}

      {/* Step 5: Display current rating */
      <h2 className='mt-4'>Current Rating: {rating}</h2>
      }
      
      {/* Step 6: Add a Reset button to clear the rating */
      <button onClick={() => setRating(0)} className='w-auto bg-gray-200 p-4 mt-5 rounded-lg'>
        Reset Rating
      </button>
      }
    </div>
  );
}

export default StarRating;
