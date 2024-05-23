// components/RatingBar.tsx

import { useState, useEffect } from 'react';

interface RatingBarProps {
  rating: number;
  sendRatingToParent: (data: number) => void;
}

const RatingBar: React.FC<RatingBarProps> = ({rating, sendRatingToParent}) => {
  // State to hold the selected rating (from 1 to 10)
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  // Function to handle when a rating button is clicked
  const handleRatingClick = (value: number) => {
    setSelectedRating(value);
    sendRatingToParent(value);
    console.log("_____feedback____", selectedRating);
  };

  useEffect(() => {
    setSelectedRating(rating);
    console.log("_____feedback1____", selectedRating);
  }, [rating]);

  return (
    <div className="flex flex-col items-center">
      {/* Rating buttons */}
      <div className="flex justify-between w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <button
            key={value}
            onClick={() => handleRatingClick(value)}
            className={`text-lg font-semibold py-2 px-4 rounded-full focus:outline-none ${
              selectedRating === value ? 'text-red bg-red-500 bg-yellow-500 rounded-full' : 'text-blue-500 hover:bg-blue-200'
            }`}
          >
            {selectedRating === value && (
              <div className="w-3 h-3 bg-yellow-500 rounded-full absolute -top-1 -right-1"></div>
            )}
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingBar;
