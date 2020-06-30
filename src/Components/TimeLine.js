import React from 'react'
import styled from 'styled-components'
import Messenger from './Message'

const Container = styled.div`
  padding: 12px 8px;
  flex-grow: 1;
  display: grid;
  gap: 16px;
  justify-content: end;
  align-items: start;
  background: #e5ddd5; 
  overflow-y: scroll; 
`

function TimeLine(props) {

  return (
    <Container>
      {props.list.map((message, index) => {
          return (<Messenger key={index} message={message} index={index} />)
        })}
    </Container>
  )
}

export default TimeLine
