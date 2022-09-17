/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const FitLogo = ({size, ...props}) => (
  <svg viewBox="0 0 199 87" fill="currentColor" width={ size || "199" } height={ size || "87" } {...props}>
    <path d="M30.8896 0H12.561L14.5283 12.3189H2.29513L4.06278 30.5304H16.2959L18.2631 42.8494H36.5917L34.6245 30.5304H46.8576L45.09 12.3189H32.8568L30.8896 0zM47.722 30.5303L45.9544 12.3188H78.5908L80.3585 30.5303H47.722zM20.1447 56.9898L18.3771 43.7065H82.6559L84.4236 59.4539H39.2298L42.8079 83.8778H23.7228L20.1447 56.9898zM87.1497 12.3188H105.911L115.119 86.4488H96.3586L87.1497 12.3188zM143.849 29.1309H162.61L166.26 57.7914 169.91 86.4519H151.149L147.499 57.7914 143.849 29.1309zM188.172 12.3188L189.996 28.4947 116.078 28.4947 114.253 12.3188 188.172 12.3188z"
      fill="currentColor" />
  </svg>
);
FitLogo.displayName = 'FitLogo';
FitLogo.propTypes = {
  size: PropTypes.string
}
export default FitLogo;
/* tslint:enable */
/* eslint-enable */
