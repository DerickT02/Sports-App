import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Adjust path if needed

interface CardProps {
  image: string;
  title: string;
  active: boolean;
  index: number;
  activeIndex: number;
}

const Card: React.FC<CardProps> = ({ image, title, active = false, index, activeIndex }) => {
  const { isDark } = useTheme();
  const offsetIndex = Math.abs(index - activeIndex);
  const offset = active ? 0 : offsetIndex * 30;

  return (
    <div
      style={{
        flex: '0 0 auto',
        height: 360,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        transition: 'opacity 0.4s',
        opacity: active ? 1 : 0.25,
        scrollSnapAlign: 'center',
      }}
    >
      <div
        style={{
          paddingTop: `${offset}px`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: 260,
            height: 260,
            borderRadius: 21,
            border: isDark
              ? '0.66px rgba(255, 255, 255, 0.15) solid'
              : '0.66px rgba(0, 0, 0, 0.15) solid',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            color: isDark ? 'white' : '#111',
            fontSize: 32,
            fontWeight: 700,
            fontFamily: 'Satoshi Variable',
            textShadow: isDark
              ? '0px 3px 16px rgba(0, 0, 0, 0.25)'
              : '0px 3px 8px rgba(255, 255, 255, 0.2)',
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default Card;
