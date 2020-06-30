import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  box-sizing: border-box;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
`
const InputName = styled.input`
  width:90px;
  height:100%;
  padding-left:8px;
  border: none;
  border-radius: 3px;
  font-size:16px;
`
const InputMessage = styled(InputName)`
  flex-grow:1;
  margin: 0 10px;
`
const BtnSend = styled.button`
  font-weight: bold;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  height:100%;
  border-radius: 3px;
  cursor: pointer;
`
class Inputs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: "",
      message: "",
      newMessage: false
    }
  }

  handleAuthor = (event) => {
    this.setState({ author: event.target.value })
  }

  handleMessage = (event) => {
    this.setState({ message: event.target.value })
  }

  handlePressEnter = (event) => {
    const key = event.which;
    if (key === 13 && this.state.autor !== "" && this.state.mensagem !== "") {
      this.props.addMensagem(this.state.author, this.state.message);
      this.setState({
        author: "",
        message: "",
      })
    }
  }

  handleButtonSend = () => {
    if (this.state.autor !== "" && this.state.mensagem !== "") {
      this.props.addMensagem(this.state.author, this.state.message);
      this.setState({
        author: "",
        message: "",
      })
    }
  }

  render() {
    return (
      <Container>
        <InputName
          type="text"
          placeholder="Usuário"
          value={this.state.author}
          onChange={this.handleAuthor}></InputName>
        <InputMessage
          type="text"
          placeholder="Mensagem"
          value={this.state.message}
          onChange={this.handleMessage}
          onKeyDown={this.handlePressEnter}>
        </InputMessage>
        <BtnSend onClick={this.handleButtonSend}>Enviar</BtnSend>
      </Container>
    )
  }
}

export default Inputs