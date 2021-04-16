import React from 'react';
import './Card.scss';
import Review from './Review';

function Card(props) {
  const { star, review, position, writer } = props;
  return position === 'vertical' ? (
    // image 영역
    // 내용 영역
    // 별점, 후기영역

    <div className={`card ${position}`}>
      <img src="/images/logo.png" alt="itemImage" />
      <div className="card_content">
        <h3 className="label">Card Label</h3>
        <h2 className="title">Card Title</h2>
        <p className="paragraph">
          <strong>Hilight</strong> <span>Croos Out</span>
        </p>
      </div>
      {star && review ? (
        <Review star={star} review={review} position={position} />
      ) : null || star ? (
        <Review star={star} position={position} />
      ) : null}
    </div>
  ) : (
    <div className={`card ${position}`}>
      <img src="../images/logo.png" alt="itemImage" />
      <div className="card_content_container">
        <div className="card_content">
          <h2 className="title">Card Label</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        {star ? <Review position={position} star={star} writer={writer} /> : null}
      </div>
    </div>
  );
}

export default Card;
