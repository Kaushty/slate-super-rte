import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

/*
const DragDiv = styled.div`
    display: flex;
    margin: 0;
    justify-content: flex-start;
    align-items: center;
`

const DragHandle = styled.div`
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-color: green;
    opacity: 0;
    transition: 0.2s ease-out all;

    ${DragDiv}:hover & {
        display: block;
        opacity: 0.7;
    }
`
*/

const ContainerView = styled.div`
    width: 100%;
    margin: 0;
    padding: 2px;
`

const DraggableElement  = (props) => {
    return (
        <Draggable draggableId={`${props.index}`} key={props.index} index={props.index}>
            {
                provided => (                  
                    <ContainerView className='container' 
                        ref={provided.innerRef}
                        {...provided.draggableProps}    
                        
                    >                   
                        <div {...provided.dragHandleProps} style={{marginTop: '10px'}}>
                            {props.children}
                        </div>
                    </ContainerView>
                )
            }

        </Draggable>        
    )
}

/*
const withDraggableIcon  = (props) => {
    return (
        <Draggable draggableId={`${props.index}`} key={props.index} index={props.index}>
            {
                provided => (
                    <DragDiv         
                    ref={provided.innerRef}
                    {...provided.draggableProps}                
                    >
                        <DragHandle                                                                      
                            {...provided.dragHandleProps}
                        />
                        {props.children}
                    </DragDiv>    
                )
            }

        </Draggable>        
    )
}
*/

export default DraggableElement
