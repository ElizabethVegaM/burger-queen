import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import PropTypes from 'prop-types';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import image from '../../img/happy-burger2.png';

const Header = ({ text }) => (
  <header className="head">
    <Logo source={image} altText="Header Logo" className="header-logo" />
    <h1>{text}</h1>
    <div>
      <Link to="/waiter">
        <Button>Comedor</Button>
      </Link>
      <Link to="/kitchen">
        <Button>Cocina</Button>
      </Link>
      <Link to="/">
        <Button>Volver</Button>
      </Link>
    </div>
    <p className="header-time">{moment().format('LT')}</p>
  </header>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
