import * as React from "react"

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 41 47" {...props}>
      <g
        transform="translate(1.862 2.894)"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M10.696 16.864a1.293 1.293 0 001.818-.005 1.265 1.265 0 00-.006-1.8l-1.438-1.406a.319.319 0 010-.45l1.437-1.432a1.273 1.273 0 00.403-.909 1.26 1.26 0 00-.38-.918 1.285 1.285 0 00-.93-.37 1.295 1.295 0 00-.915.405l-2.571 2.56a1.265 1.265 0 000 1.798l2.582 2.527zM24.668 16.86a1.301 1.301 0 001.829 0l2.585-2.553a1.275 1.275 0 00.38-.903 1.264 1.264 0 00-.38-.903l-2.585-2.553a1.296 1.296 0 00-.915-.374 1.31 1.31 0 00-.914.375 1.275 1.275 0 00-.379.903c0 .338.137.663.38.902l1.442 1.425a.317.317 0 01.07.347.317.317 0 01-.07.103l-1.443 1.425a1.277 1.277 0 00-.379.903 1.262 1.262 0 00.38.903zM16.901 19.082c.325.11.68.084.986-.072.306-.156.54-.43.648-.76l2.584-7.898a1.34 1.34 0 00-.07-1.007 1.301 1.301 0 00-.748-.66 1.273 1.273 0 00-.988.071c-.307.157-.54.43-.649.762l-2.585 7.899a1.342 1.342 0 00.072 1.006 1.314 1.314 0 00.75.659z"
          fill={props.color}
        />
        <rect
          stroke={props.color}
          strokeWidth={4}
          x={0.496}
          width={36.207}
          height={26.809}
          rx={2.516}
        />
        <path
          stroke={props.color}
          strokeWidth={4}
          strokeLinecap="round"
          d="M19.117 28.723v5.621l-7.242 6.826M18.082 34.468l7.242 6.702"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
