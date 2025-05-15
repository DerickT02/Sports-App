import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Slider.css';
import image1 from '../../assets/bRoll/pictureA.png'
import image2 from '../../assets/bRoll/pictureB.png'
import image3 from '../../assets/bRoll/pictureC.png'
import image4 from '../../assets/bRoll/pictureD.png'
import image5 from '../../assets/bRoll/pictureE.png'
import image6 from '../../assets/bRoll/pictureF.png'
import image7 from '../../assets/bRoll/pictureG.png'
import image8 from '../../assets/bRoll/pictureH.png'


const cards = [
  image1, image2, image3, image4, image5, image6, image7, image8
];

const CARD_WIDTH = 260;
const GAP = 40;

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % cards.length);
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
        {cards.map((card, i) => (
          <Card
            key={i}
            image={`${card}`}
            
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
