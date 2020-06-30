import React from 'react'
import styled from 'styled-components'
import Messenger from './Message'

const Container = styled.div`
  flex-grow:1;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: #e5ddd5;  
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
