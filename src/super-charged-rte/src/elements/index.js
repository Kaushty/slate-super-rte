import React, { useCallback } from 'react'
import { Editable, useSlate } from 'slate-react';
import { Droppable } from 'react-beautiful-dnd'
import isHotkey from 'is-hotkey'

import Element from './paragraph/renderElement'
import Leaf from './paragraph/renderLeaf'
import {toggleMark } from '../utils'

const Editor = (props) => {
    const renderElement = useCallback((properties) => <Element {...properties} state={props.state}/>, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const editor = useSlate();

    const HOTKEYS = {
        'mod+b': 'bold',
        'mod+i': 'italic',
        'mod+u': 'underline',
        'mod+`': 'code',
    }

    const myStyle = {
        margin: '0 50px',
        userSelect: "none",
      }
    
    const onKeyDown = event => {
        for (const hotkey in HOTKEYS) {
          if (isHotkey(hotkey, event)) {
            event.preventDefault()
            const mark = HOTKEYS[hotkey]
            toggleMark(editor, mark)
          }
        }
    }

    return (
        <Droppable droppableId="supereditor-list" >
        {
          (provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Enter some rich text…"
                spellCheck
                autoFocus
                onKeyDown={onKeyDown}
                style={myStyle}
              />
              {provided.placeholder}
          </div>
          )
        }            
      </Droppable>
    )
}

export default Editor