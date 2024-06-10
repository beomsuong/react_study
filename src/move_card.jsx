import React, { useState } from 'react';
import './move_card.css';

const MoveCardComponent = () => {
  const [transformStyle, setTransformStyle] = useState({});
  const [overlayStyle, setOverlayStyle] = useState({});
  const [xy,setXY]=useState({x:0,y:0})
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
      position:"absolute",left:xy.x,top:xy.y


    });
    setXY({x:e.clientX,y:e.clientY});
  };

  const handleMouseOut = () => {
    setOverlayStyle({ filter: 'opacity(0)' });
    setTransformStyle({ transform: 'perspective(350px) rotateY(0deg) rotateX(0deg)' });
  };

  return (
    <div className="move_container" onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} style={transformStyle}>
      <div className="move_overlay" style={overlayStyle}></div>
      <div className="move_card"></div>
    </div>
  );
};

export default MoveCardComponent;
