/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Menu = ({size, ...props}) => (
  <svg viewBox="0 0 16 11" fill="currentColor" width={ size || "16" } height={ size || "11" } {...props}>
    <path stroke="currentColor" d="M0 .75L11 .75M6 10.75L16 10.75M0 5.75L16 5.75" strokeWidth=".5" />
  </svg>
);
Menu.displayName = 'Menu';
Menu.propTypes = {
  size: PropTypes.string
}
export default Menu;
/* tslint:enable */
/* eslint-enable */
