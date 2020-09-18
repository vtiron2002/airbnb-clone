import React, { useState } from 'react';

import './DateSearch.scss';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';

import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className='search'>
      <div className='search__content'>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h3>
          Number of guests
          <PeopleIcon />
        </h3>
        <input type='number' min={0} defaultValue={2} />
        <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
      </div>
    </div>
  );
};
