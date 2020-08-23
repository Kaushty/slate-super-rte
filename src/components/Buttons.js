import React from 'react'
import { useSlate } from 'slate-react'

import { Button, Icon } from './helper'
import { toggleMark, toggleBlock, isMarkActive, isBlockActive } from '../utils.js/utils'

export const BlockButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
      <Button
        active={isBlockActive(editor, format)}
        onMouseDown={event => {
          event.preventDefault()
          toggleBlock(editor, format)
        }}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }
  
  export const MarkButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
      <Button
        active={isMarkActive(editor, format)}
        onMouseDown={event => {
          event.preventDefault()
          toggleMark(editor, format)
        }}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }
  