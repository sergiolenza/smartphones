import React from 'react';

const LoadingPlaceholder = () => (
  <svg
    role="img"
    aria-label="loading-placeholder"
    width={38}
    height={38}
    stroke="#132337"
    viewBox="0 0 38 38"
    style={{
      position: 'absolute',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      textAlign: 'center',
    }}
  >
    <g transform="translate(1 1)" strokeWidth={2} fill="none" fillRule="evenodd">
      <circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
      <path d="M36 18c0-9.94-8.06-18-18-18">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
);

export default LoadingPlaceholder;
