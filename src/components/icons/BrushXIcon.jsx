import React from 'react';

const BrushXIcon = (props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="rotate(45 50 50)">
      <path
        d="M15,50 C20,40 25,40 30,50 C35,60 40,60 45,50 C50,40 55,40 60,50 C65,60 70,60 75,50 C80,40 85,40 90,50"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
    </g>
    <g transform="rotate(-45 50 50)">
      <path
        d="M15,50 C20,40 25,40 30,50 C35,60 40,60 45,50 C50,40 55,40 60,50 C65,60 70,60 75,50 C80,40 85,40 90,50"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  </svg>
);

export default BrushXIcon;