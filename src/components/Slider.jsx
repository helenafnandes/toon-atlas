import React, { useRef } from "react";

const Slider = () => {
  const sliderRef = useRef(null);

  // Function to generate random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Generate array of random colors for placeholders
  const placeholderColors = Array.from({ length: 10 }, () => getRandomColor());

  // Function to scroll slider left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft - 300,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll slider right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft + 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-auto">
      {/* Slider track */}
      <div className="px-6 pl-6 flex py-4 space-x-8 overflow-x-scroll scrollbar-hidden scroll-smooth">
        {placeholderColors.map((color, index) => (
          <div
            key={index}
            className="w-48 h-64 bg-gray-400 rounded-md flex-shrink-0"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      {/* Previous and Next buttons */}
      <div
        className="absolute inset-y-0 left-0 flex items-center justify-center w-12 bg-black bg-opacity-25 text-white cursor-pointer hover:bg-opacity-50"
        onClick={scrollLeft}
      >
        {"<"}
      </div>
      <div
        className="absolute inset-y-0 right-0 flex items-center justify-center w-12 bg-black bg-opacity-25 text-white cursor-pointer hover:bg-opacity-50"
        onClick={scrollRight}
      >
        {">"}
      </div>
    </div>
  );
};

export default Slider;
