import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor, Transforms } from 'slate'
import { withHistory } from 'slate-history'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import Toolbar from './Toolbar'
import Leaf from './Leaf'
import {toggleMark } from '../utils.js/utils'
import Element from './RenderElement'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const RichTextExample = () => {
  const [state, setState] = useState(initialValue)
  const renderElement = useCallback((props) => <Element {...props} state={state}/>, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  
const onDragEnd = result => {
  const { destination, source } = result
  if( !destination ) {
    return
  }
  if(destination.index === source.index ){
    return
  }
  let oldState = Array.from(state)
  const childNode = oldState.splice(source.index, 1)
  oldState.splice(destination.index, 0, childNode[0])
  setState(oldState)
  Transforms.moveNodes(editor, { at: [source.index], to: [destination.index]})
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
    <DragDropContext onDragEnd={onDragEnd}>
        <Slate editor={editor} value={state} onChange={value => setState(value)}>
          <Toolbar />  

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
      </Slate>
    </DragDropContext>
  )
}

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

export default RichTextExample