import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Slider.css';

const titles = [
  'Coral Reef', 'Ripples', 'Tidewave', 'Mountaineer', 'Driftline',
  'Deep Blue', 'Breaker', 'Cascade', 'Moonrise', 'Zenith',
  'Lagoon', 'Foamline', 'Wavecrest', 'Seabright', 'Saltbay',
  'Sunburst', 'Seacliff', 'Tsunami', 'Pelagic', 'Glacier'
];

const CARD_WIDTH = 260;
const GAP = 40;

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${(CARD_WIDTH + GAP) * activeIndex}px)`,
        }}
      >
        {titles.map((title, i) => (
          <Card
            key={i}
            image={`https://placehold.co/260x260?text=${encodeURIComponent(title)}`}
            title={title}
            active={i === activeIndex}
            index={i}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
