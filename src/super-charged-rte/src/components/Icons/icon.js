import React from 'react'
import { cx, css } from 'emotion'

const Icon = React.forwardRef(({ className, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        'material-icons',
        className,
        css`
          font-size: 18px;
          vertical-align: middle;
          text-align: center;
          ${className}:hover {
            color: 'red';
          }
        `
      )}
    />
  ))

  export default Icon