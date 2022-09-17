/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const FLogo = ({size, ...props}) => (
  <svg viewBox="0 0 65 62" fill="currentColor" width={ size || "65" } height={ size || "62" } {...props}>
    <path d="M22.4793 0H9.14104L10.5808 9.02624H1.6784L2.97685 22.37H11.8793L13.319 31.3963H26.6573L25.2175 22.37H34.1199L32.8215 9.02624H23.9191L22.4793 0zM34.7491 22.3701L33.4506 9.02628H57.2012L58.4996 22.3701H34.7491zM14.6978 41.7571L13.4026 32.0242H60.1802L61.4771 43.5625H28.5882L31.2082 61.4582H17.3195L14.6978 41.7571z"
      fill="currentColor" />
  </svg>
);
FLogo.displayName = 'FLogo';
FLogo.propTypes = {
  size: PropTypes.string
}
export default FLogo;
/* tslint:enable */
/* eslint-enable */
