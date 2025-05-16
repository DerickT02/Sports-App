import React from 'react';
interface CardProps {
    image: string;
    active: boolean;
    index: number;
    activeIndex: number;
}
declare const Card: React.FC<CardProps>;
export default Card;
