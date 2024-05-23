import React from 'react';

interface CircleBarChartProps {
  progress: number; // Progress percentage (0-100)
  thickness?: number; // Optional thickness of the ring
}

const CircleBarChart: React.FC<CircleBarChartProps> = ({ progress, thickness = 10 }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - progress) / 100) * circumference;


  console.log("Progress:", progress);
  console.log("Circumference:", circumference);
  console.log("Progress Offset:", progressOffset);
  // Define gradient colors
  const gradientColors = [
    '#0074D9',
    '#7FDBFF',
    '#39CCCC',
    '#3D9970',
    '#2ECC40',
    '#01FF70'
  ];

  // Calculate the gradient stops
  const stops = gradientColors.map((color, index) => (
    <stop key={index} offset={`${(index * 100) / (gradientColors.length - 1)}%`} stopColor={color} />
  ));

  return (
    <svg viewBox="0 0 100 100" width="200" height="200">
      {/* Background ring */}
      <circle
        cx="50"
        cy="50"
        r={radius - thickness / 2}
        fill="none"
        stroke="#ddd"
        strokeWidth={thickness}
      />
      {/* Progress ring */}
      <defs>
        <radialGradient id="progressGradient" cx="50%" cy="50%" r="50%">
          {stops}
        </radialGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r={radius - thickness / 2}
        fill="none"
        stroke="url(#progressGradient)" // Use radial gradient for stroke color
        strokeWidth={thickness}
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        transform={`rotate(-90 50 50)`} // Start from top
      />
      {/* Text in the center */}
      <text x="50" y="45" textAnchor="middle" dominantBaseline="middle" fontSize="8" fill="#000">
        Completed
      </text>
      <text x="50" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="#000">
        {progress}%
      </text>
    </svg>
  );
};

export default CircleBarChart;
