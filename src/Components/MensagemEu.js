import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";

const ContainerMessenger = styled.div`
    display: flex;
    flex-direction: column;    
    background: pink;    
    box-sizing: border-box;
    margin-bottom: 2%;
    margin-left: 2%;
    margin-right: 2%;
    padding: 2%;
    box-sizing: border-box;
    border-radius:5px;
    align-self: flex-end;
`
const UserName = styled.span`
    font-weight: bold;
    
`
const UserMessenger = styled.span`
`
const UserMessengerApagada = styled.span`
  font-style: italic;
`
class MessengerEu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deletado: false,
      mensagem: this.props.userMessenger
    }
  }

  onDoubleClickDeletar = () => {
    let apagarMsg = window.confirm('Você deseja apagar essa mensagem?')
    if (apagarMsg) {
      this.setState({
        deletado: true
      })
    }
  }

  render() {
    let estruturaComponente

    if (this.state.deletado) {
      estruturaComponente = <ContainerMessenger>
      <UserName> {this.props.userName} </UserName>
      <UserMessengerApagada> Essa mensagem foi apagada </UserMessengerApagada>
    </ContainerMessenger>
    } else {
      estruturaComponente = <ContainerMessenger onDoubleClick={this.onDoubleClickDeletar}>
        <UserName> {this.props.userName} </UserName>
        <UserMessenger> {this.state.mensagem} </UserMessenger>
      </ContainerMessenger>
    }
    return (estruturaComponente)
  }
}

export default MessengerEu