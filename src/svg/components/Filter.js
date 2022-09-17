/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Filter = ({size, ...props}) => (
  <svg viewBox="0 0 33 23" fill="currentColor" width={ size || "33" } height={ size || "23" } {...props}>
    <path stroke="currentColor" d="M0 .5L33 .5M3.903 11.5L29.452 11.5M8.517 22.5L24.839 22.5" />
  </svg>
);
Filter.displayName = 'Filter';
Filter.propTypes = {
  size: PropTypes.string
}
export default Filter;
/* tslint:enable */
/* eslint-enable */
