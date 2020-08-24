import React from 'react'
import { Editor } from 'slate'
import { useSlate } from 'slate-react'

import {DraggableElement, HandleDraggableIcon} from './createDraggable'

const Element = ({ attributes, children, element, ...rest }) => {
    const constStyle = {
        margin: '0px',
        padding: '0px',     
        width: '100%',
    } 
    
    const value = rest.state
    const editor = useSlate()

    const getPath = (childNode) => {
        for (const [node, path] of Editor.nodes(editor, { at: value.length })) {
            if (JSON.stringify(node) === JSON.stringify(childNode)) {
                return path;
            }
        }
    }

    const path = getPath(element)

    switch (element.type) {
        case 'block-quote':            
            return (
                <DraggableElement index={path[0]} >
                    <blockquote style={constStyle} {...attributes}>{children}</blockquote>
                </DraggableElement>
            )
        case 'bulleted-list':
            return (
                <DraggableElement index={path[0]} >
                    <ul {...attributes} style={constStyle}>{children}</ul>
                </DraggableElement>
            )
        case 'heading-one':
            return(
                <DraggableElement index={path[0]} >
                    <h1 {...attributes} style={constStyle}>{children}</h1>
                </DraggableElement>
            )
        case 'heading-two':
            return(                
                <DraggableElement index={path[0]} >
                    <h2 {...attributes} style={constStyle}>{children}</h2>      
                </DraggableElement>
            ) 
        case 'list-item':
            return(                                
                <li {...attributes} style={constStyle}>{children}</li>                      
            ) 
        case 'numbered-list':
            return(                
                <DraggableElement index={path[0]} >
                    <ol {...attributes} style={constStyle} >{children}</ol>      
                </DraggableElement>
            )   
        default:
            return(                
                <DraggableElement index={path[0]} >
                    <p {...attributes} style={constStyle}>{children}</p>      
                </DraggableElement>
            ) 
        
    }
}

export default Element