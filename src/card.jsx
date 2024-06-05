import React, { useState } from 'react';
import './card.css';

const CardComponent = () => {
  const [transformStyle, setTransformStyle] = useState({});
  const [overlayStyle, setOverlayStyle] = useState({});

  const handleMouseMove = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateY = -1 / 5 * x + 20;
    const rotateX = 4 / 30 * y - 20;

    setOverlayStyle({
      backgroundPosition: `${x / 5 + y / 5}%`,
      filter: `opacity(${x / 200}) brightness(1.2)`,
    });

    setTransformStyle({
      transform: `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseOut = () => {
    setOverlayStyle({ filter: 'opacity(0)' });
    setTransformStyle({ transform: 'perspective(350px) rotateY(0deg) rotateX(0deg)' });
  };

  return (
    <div className="container" onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} style={transformStyle}>
      <div className="overlay" style={overlayStyle}></div>
      <div className="card"></div>
    </div>
  );
};

export default CardComponent;
