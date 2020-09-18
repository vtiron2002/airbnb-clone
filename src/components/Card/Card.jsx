import React from 'react';

import './Card.scss';

const Card = ({
  src = 'https://media.cntraveler.com/photos/5ea354e75e5dc70008d054b9/16:9/w_2560%2Cc_limit/24912891-australia-3.jpg',
  title,
  description,
  price,
}) => {
  return (
    <div className='card'>
      <img src={src} alt='' />
      <div className='card__info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
        {price && <h3>${price} / night</h3>}
        
      </div>
    </div>
  );
};

export default Card;
