/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const User = ({size, ...props}) => (
  <svg viewBox="0 0 38 42" fill="currentColor" width={ size || "38" } height={ size || "42" } {...props}>
    <circle cx="18.841" cy="9.308" r="8.808" stroke="currentColor" />
    <path d="M37.1535 41.5C37.1535 39.1261 36.6859 36.7755 35.7775 34.5823C34.869 32.3892 33.5375 30.3964 31.8589 28.7178C30.1804 27.0392 28.1876 25.7077 25.9944 24.7993C23.8012 23.8908 21.4506 23.4232 19.0767 23.4232C16.7029 23.4232 14.3522 23.8908 12.1591 24.7993C9.9659 25.7077 7.97314 27.0392 6.29456 28.7178C4.61598 30.3964 3.28445 32.3892 2.37601 34.5823C1.46757 36.7755 1 39.1261 1 41.5"
      stroke="currentColor" />
  </svg>
);
User.displayName = 'User';
User.propTypes = {
  size: PropTypes.string
}
export default User;
/* tslint:enable */
/* eslint-enable */
