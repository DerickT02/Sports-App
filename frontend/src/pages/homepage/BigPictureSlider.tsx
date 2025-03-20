import React, { useRef } from 'react';
import './BigPictureSlider.css';
import Photo1 from '../../assets/SlideNumber1.png'; // Import your images
import Photo2 from '../../assets/SlideNumber2.jpg'; // Import your images

interface ImageData {
  src: string;
  alt: string;
}

// Array of images for the slider
const images: ImageData[] = [
  { src: Photo1, alt: 'Slider 1' }, // Use imported images
  { src: Photo2, alt: 'Slider 2' },
];

const BigPictureSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Move the slider to the left
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth, // Scroll by one image width
        behavior: 'smooth',
      });
    }
  };

  // Move the slider to the right
  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth, // Scroll by one image width
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="big-picture-slider-container">
      {/* Left Arrow */}
      <button className="arrow left-arrow" onClick={slideLeft}>
        &lt;
      </button>

      {/* Slider */}
      <div className="big-picture-slider" ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image.src}
              alt={image.alt}
              className="slider-image"
              style={{ height: '550px', width: '100%', objectFit: 'cover' }} // Adjusted height
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="arrow right-arrow" onClick={slideRight}>
        &gt;
      </button>
    </div>
  );
};

export default BigPictureSlider;