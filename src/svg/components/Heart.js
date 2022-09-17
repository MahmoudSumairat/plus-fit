/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Heart = ({size, ...props}) => (
  <svg viewBox="0 0 96 96" fill="currentColor" width={ size || "96" } height={ size || "96" } {...props}>
    <defs>
      <clipPath id="clip-heart">
        <path d="M0 0H96V96H0z" />
      </clipPath>
    </defs>
    <g id="heart" clipPath="url(#clip-heart)">
      <g id="pills" transform="translate(-116 -232)">
        <g id="Group_150">
          <path id="Path_180" d="M164,247.762c-.092-.1-.184-.194-.276-.286A25.568,25.568,0,1,0,127.5,283.57c.1.1.2.2.316.3h0L164,320l36.224-36.093-.041-.041c.112-.092.214-.194.316-.3a25.568,25.568,0,1,0-36.223-36.094C164.184,247.568,164.092,247.66,164,247.762Z"
            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </g>
    </g>
  </svg>
);
Heart.displayName = 'Heart';
Heart.propTypes = {
  size: PropTypes.string
}
export default Heart;
/* tslint:enable */
/* eslint-enable */
