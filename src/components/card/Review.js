import React from 'react';
import Circle from './Circle';

function Review({ star, review, position, writer }) {
  const makeCircle = () => {
    const allCircle = [];
    let increase = 0;
    for (increase; increase < star; increase++) {
      allCircle.push(<Circle check={'check'} key={increase} />);
    }
    for (increase; increase < 5; increase++) {
      allCircle.push(<Circle key={increase} />);
    }
    return allCircle;
  };

  return position === 'vertical' ? (
    <div className="card_review">
      <div className="circle_container">{makeCircle()}</div>
      {review ? <div className="review">{review}</div> : null}
    </div>
  ) : (
    <div className="card_review">
      <div className="circle_container">{makeCircle()}</div>
      <p className="writer"> | {writer}</p>
    </div>
  );
}

export default Review;
