import React from 'react';
import './SearchRes.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

const SearchRes = ({
  src,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className='searchRes'>
      <img src={src} alt='' />
      <div className='searchRes__info'>
        <h5>
          {location}
          <FavoriteBorderIcon />
        </h5>
        <h3>{title}</h3>
        <p>{description}</p>
        <h1>${price} / night</h1>
        <h2>
          <span>
            <StarIcon className="star" />
            {star}
          </span>
          ${total} total
        </h2>
      </div>
    </div>
  );
};

export default SearchRes;
