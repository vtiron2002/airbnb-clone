import React from 'react';

import './Search.scss';

import { Button } from '@material-ui/core';

import SearchRes from '../../components/SearchRes/SearchRes';

const Search = () => {
  const filterBtns = [
    'Cancellations Flexibility',
    'Type of place',
    'Price',
    'Rooms and beds',
    'More filters',
  ];

  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 stays &middot; 26 august to 30 august &middot; 2 guests</p>
        <h1>Stays nearby</h1>
        {filterBtns.map((b) => (
          <Button variant='outlined'>{b}</Button>
        ))}
      </div>
      {new Array(12).fill().map(() => (
        <SearchRes
          src='https://media.cntraveler.com/photos/5ea354e75e5dc70008d054b9/16:9/w_2560%2Cc_limit/24912891-australia-3.jpg'
          total={117}
          price={30}
          star={4.73}
          location='Private room in center of London'
          title='Stay in this spacious Edwardian House'
          description='1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine'
        />
      ))}
    </div>
  );
};

export default Search;
