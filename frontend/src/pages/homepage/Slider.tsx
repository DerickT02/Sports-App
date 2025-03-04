import React, { useRef } from 'react';
import Card from './Card'; // Import the Card component
import './Slider.css'; // Import the CSS file for the slider

const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Move the slider to the left
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300, // Adjust this value based on card width + margin
        behavior: 'smooth',
      });
    }
  };

  // Move the slider to the right
  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300, // Adjust this value based on card width + margin
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="slider-container">
      {/* Left Arrow */}
      <button className="arrow left-arrow" onClick={slideLeft}>
        &lt;
      </button>

      {/* Slider */}
      <div className="slider" ref={sliderRef}>
        <Card
          image="https://placehold.co/200x150"
          title="Card 1"
          description="first card."
        />
        <Card
          image="https://placehold.co/200x150"
          title="Card 2"
          description="second card."
        />
        <Card
          image="https://placehold.co/200x150"
          title="Card 3"
          description="third card."
        />
        <Card
          image="https://placehold.co/200x150"
          title="Card 4"
          description="fourth card."
        />
        <Card
          image="https://placehold.co/200x150"
          title="Card 5"
          description="fifth card."
        />
        <Card
          image="https://placehold.co/200x150"
          title="Card 6"
          description="sixth card."
        />
        <Card
          image="https://placehold.co/200x150"
          title="Card 7"
          description="seventh card."
        />
        <Card
          image="https://placehold.co/200x150"
          title="Card 8"
          description="eighth card."
        />
        <Card
          image="https://placehold.co/200x150"
          title="Card 9"
          description="ninth card."
        />
        <Card
          image="https://placehold.co/200x150"
          title="Card 10"
          description="tenth card."
        />
      </div>

      {/* Right Arrow */}
      <button className="arrow right-arrow" onClick={slideRight}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;