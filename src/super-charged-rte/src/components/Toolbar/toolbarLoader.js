import React from 'react'
import { cx, css } from 'emotion'

const Menu = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `
    )}
  />
))

const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <Menu
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        position: relative;
        padding: 10px;
        margin: 10px 20px 20px ;
        border: 2px solid #e1e1e1;
        text-align: center;
        border-radius: 5px;
      `
    )}
  />
))

export default Toolbar