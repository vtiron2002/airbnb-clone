import React, { useState } from 'react';
import './SearchRes.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
  const [liked, setLiked] = useState(false);

  const like = () => setLiked((l) => !l);
  return (
    <div className='searchRes'>
      <img src={src} alt='' />
      <div className='searchRes__info'>
        <h5>
          {location}
          {liked ? (
            <FavoriteIcon onClick={like} className='liked' />
          ) : (
            <FavoriteBorderIcon onClick={like} />
          )}
        </h5>
        <h3>{title}</h3>
        <p>{description}</p>
        <h1>${price} / night</h1>
        <h2>
          <span>
            <StarIcon className='star' />
            {star}
          </span>
          ${total} total
        </h2>
      </div>
    </div>
  );
};

export default SearchRes;
