import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path fill={props.color} d="M6.188 8.719a6.446 6.446 0 011.444-1.087c2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245a3.385 3.385 0 00-3.834-1.949 3.33 3.33 0 00-1.633.898L4.06 15.201a3.355 3.355 0 000 4.74 3.355 3.355 0 004.74 0l1.327-1.327a8.533 8.533 0 003.779.575l-2.929 2.929a6.43 6.43 0 11-9.093-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929a8.534 8.534 0 013.779.574L15.2 4.06a3.355 3.355 0 014.74 0 3.355 3.355 0 010 4.74l-4.305 4.305a3.358 3.358 0 01-4.74 0 3.567 3.567 0 01-.727-1.051l-2.246 2.245c.236.358.481.667.796.982a6.404 6.404 0 003.036 1.704 6.441 6.441 0 004.613-.617 6.446 6.446 0 001.444-1.087l4.304-4.305a6.429 6.429 0 10-9.091-9.093z" />
    </svg>
  )
}

export default SvgComponent