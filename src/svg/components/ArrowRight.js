/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ArrowRight = ({size, ...props}) => (
  <svg viewBox="0 0 36 26" fill="currentColor" width={ size || "36" } height={ size || "26" } {...props}>
    <path stroke="currentColor" d="M0 13L33 13M22.707 1.293L34.707 13.293" strokeWidth="2" />
    <path transform="scale(-1 1) rotate(45 -33.9 -34.042)" stroke="currentColor" d="M0 -1L16.971 -1" strokeWidth="2" />
  </svg>
);
ArrowRight.displayName = 'ArrowRight';
ArrowRight.propTypes = {
  size: PropTypes.string
}
export default ArrowRight;
/* tslint:enable */
/* eslint-enable */
