import React from 'react';
import './Header.scss';

import logo from '../../images/logo.png';

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  return (
    <header className='header'>
      <img
        src={logo}
        alt='airbnb_logo'
        className='header__icon'
        onClick={() => history.push('/')}
      />

      <form onClick={() => history.push('/search')} className='header__search'>
        <input type='text' placeholder='Search...' />
        <SearchIcon />
      </form>

      <div className='header__menu'>
        <p>Become a host</p>
        <ExpandMoreIcon />
        <LanguageIcon />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
