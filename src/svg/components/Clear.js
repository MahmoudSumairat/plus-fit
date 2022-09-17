/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Clear = ({size, ...props}) => (
  <svg viewBox="0 0 21 20" fill="currentColor" width={ size || "21" } height={ size || "20" } {...props}>
    <path stroke="currentColor" d="M20.354 0.354L1.354 19.354" />
    <path transform="scale(1 -1) rotate(-45 .5 -1.207)" stroke="currentColor" d="M0 -0.5L26.87 -0.5" />
  </svg>
);
Clear.displayName = 'Clear';
Clear.propTypes = {
  size: PropTypes.string
}
export default Clear;
/* tslint:enable */
/* eslint-enable */
