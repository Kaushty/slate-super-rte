import React from 'react'
import { cx, css } from 'emotion'

const Button = React.forwardRef(
  ({ className, active, reversed, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
            ? active
              ? 'white'
              : '#aaa'
            : active
            ? 'black'
            : '#a9a9a9'};
          background-color: 
          font-weight: 800;
          border: 1.3px solid #a9a9a9;
          padding: 5px;
          margin: 2px;
          border-radius: 5px;
        `
      )}
    />
  )
)

export default Button