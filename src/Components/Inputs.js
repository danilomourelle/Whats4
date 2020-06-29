import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Messenger from './messenger'
import MessengerEu from './MensagemEu'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`
const ContainerInput = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 1%;
  align-items: center;
  justify-content: space-between;
  height: 5vh;
  background: #e5ddd5;
`
const ContainerMessenger = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  background: #e5ddd5;  
`
const InputName = styled.input`
  border: none;
  height:100%;
  border-radius: 3px;
  font-size:16px;
  padding-left:8px;
  width:90px;
`
const InputMessage = styled.input`
  border: none;
  height:100%;
  border-radius: 3px;
  font-size:16px;
  padding-left:8px;
  width:60%;
  min-width:90px;
  flex-grow:1;
  margin: 0 10px;
`
const BtnEnviar = styled.button`
  font-weight: bold;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  height:100%;
  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
`
class Inputs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      autor: "",
      mensagem: "",
      listaMsg: [],
      novaMensagem: false
    }
  }

  escreveNome = (event) => {
    this.setState({ autor: event.target.value })
  }

  escreveMensagem = (event) => {
    this.setState({ mensagem: event.target.value })
  }

  teclaEnter = (event) => {
    const tecla = event.which;
    if (tecla === 13 && this.state.autor !== "" && this.state.mensagem !== "") {
      this.addMensagem();
    }
  }

  clickEnviar = () => {
    if (this.state.autor !== "" && this.state.mensagem !== "") {
      this.addMensagem();
    }
  }

  addMensagem = () => {
    const novaMensagem = {
      userName: this.state.autor,
      userMessenger: this.state.mensagem,
    };

    const novaListaMsg = [...this.state.listaMsg, novaMensagem]
    this.setState({
      listaMsg: novaListaMsg,
      mensagem: "",
      autor: "",
      novaMensagem: false
    })
  }

  clicou = () => {
    console.log('oi')
  }

  render() {
    const msg = this.state.listaMsg.map((elemento, index, array) => {
      if (elemento.userName === "eu") {
        return( <MessengerEu onClick={this.clicou} key={index} userName={elemento.userName} userMessenger={elemento.userMessenger} />)
      }
      else {
        return (<Messenger onClick={this.clicou} key={index} userName={elemento.userName} userMessenger={elemento.userMessenger} />)
      }
    })

    return (
      <Container>
        <ContainerMessenger>
          {msg}
        </ContainerMessenger>
        <ContainerInput>
          <InputName
            type="text"
            placeholder="Usuário"
            value={this.state.autor}
            onChange={this.escreveNome}></InputName>
          <InputMessage
            type="text"
            placeholder="Mensagem"
            value={this.state.mensagem}
            onChange={this.escreveMensagem}
            onKeyDown={this.teclaEnter}>
          </InputMessage>
          <BtnEnviar
            onClick={this.clickEnviar}>Enviar</BtnEnviar>
        </ContainerInput>
      </Container>
    )
  }
}

export default Inputs