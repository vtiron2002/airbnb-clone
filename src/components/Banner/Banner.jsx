import React, { useState } from 'react';
import './Banner.scss';

import { Button } from '@material-ui/core';
import DateSearch from '../DateSearch/DateSearch';
import { useHistory } from 'react-router-dom';

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  const history = useHistory();

  return (
    <div className='banner'>
      <div className='banner__search'>
        <Button onClick={() => setShowSearch((p) => !p)} variant='outlined'>
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
        {showSearch && <DateSearch />}
      </div>
      <div className='banner__info'>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push('/search')} variant='outlined'>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
