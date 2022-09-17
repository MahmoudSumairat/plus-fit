/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ChevronDown = ({size, ...props}) => (
  <svg viewBox="0 0 24 13" fill="currentColor" width={ size || "24" } height={ size || "13" } {...props}>
    <path stroke="currentColor" d="M0.354 0.646L12.354 12.646" strokeOpacity=".69" />
    <path transform="scale(-1 1) rotate(45 -13.207 -28.47)" stroke="currentColor" d="M0 -0.5L16.971 -0.5" strokeOpacity=".69" />
  </svg>
);
ChevronDown.displayName = 'ChevronDown';
ChevronDown.propTypes = {
  size: PropTypes.string
}
export default ChevronDown;
/* tslint:enable */
/* eslint-enable */
