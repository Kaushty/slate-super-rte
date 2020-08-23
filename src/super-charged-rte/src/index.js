import React, { useMemo } from 'react'
import { withReact, Slate } from 'slate-react'
import { createEditor, Transforms } from 'slate'
import { withHistory } from 'slate-history'

import { DragDropContext } from 'react-beautiful-dnd'

import Toolbar from './components/Toolbar'
import Editor from './elements'

const RichTextEditor = ({state, setState}) => {
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <Slate editor={editor} value={state} onChange={value => setState(value)}>
            <Toolbar />  
            <Editor state={state}/>                    
      </Slate>
    </DragDropContext>
  )
}

export default RichTextEditor