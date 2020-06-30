import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    max-width: 60%;
    padding: 2%;
    border-radius:5px;
    box-sizing: border-box;
    word-break: break-all;
    display: flex;
    flex-direction: column;    
    background: ${props => props.myMessage ? 'pink' : 'white'};    
    align-self: ${props => props.myMessage ? 'flex-end' : 'flex-start'};  
    span:first-child {
      font-weight:bold
    }
`

class Messenger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deleted: false,
    }
  }

  deleteOnDoubleClick = () => {
    if (window.confirm('Você deseja apagar essa mensagem?')) {
      this.setState({
        deleted: true
      })
    }
  }

  render() {
    const { message } = this.props

    return (
      this.state.deleted ? '' :
        <Container myMessage={message.author === "eu"} onDoubleClick={this.deleteOnDoubleClick}>
          <span> {message.author} </span>
          <span> {message.message} </span>
        </Container>
    )
  }
}

export default Messenger