import React from 'react'
import styled from 'styled-components'
import Messenger from './Message'

const Container = styled.div`
  padding: 12px 8px;
  flex-grow: 1;
  background: #e5ddd5; 
  overflow-y: auto; 
`
const FlexContainer = styled.div`
  width: 100%;
  display:flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  min-height: 100%; 
`

function TimeLine(props) {

  return (
    <Container>
      <FlexContainer>
        {props.list.map((message, index) => {
          return (<Messenger key={index} message={message} index={index} />)
        })}
      </FlexContainer>
    </Container>
  )
}

export default TimeLine
