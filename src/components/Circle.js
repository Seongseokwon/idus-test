import React from 'react';
import './Circle.scss';
function Circle({ check }) {
  return <div className={`circle ${check}`} />;
}

export default Circle;
