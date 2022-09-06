import React, { FC } from "react";

interface Props {
  color?: string;
  miltiplier?: number;
}

const LoaderSpinner: FC<Props> = ({ color = '#000000', miltiplier = 1 }) => {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ shapeRendering: 'auto' }}
          width={100 * miltiplier + 'px'}
          height={100 * miltiplier + 'px'}
          viewBox={`0 0 ${50 * miltiplier} ${50 * miltiplier}`}
          className="spinner"
          preserveAspectRatio="xMidYMid"
      >
        <circle
            cx={25 * miltiplier}
            cy={25 * miltiplier}
            fill="none"
            stroke={color}
            strokeWidth={5 * (miltiplier / 1.2)}
            r={16 * miltiplier}
            strokeDasharray={`${80 * miltiplier} ${28 * miltiplier}`}
        >
          <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values={`0 ${25 * miltiplier} ${25 * miltiplier}; 360 ${25 * miltiplier} ${25 * miltiplier}`}
              keyTimes="0;1"
          />
        </circle>
      </svg>
  );
};

export default LoaderSpinner;
