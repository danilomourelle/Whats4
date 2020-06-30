import React from 'react';
import styled from 'styled-components';
import Inputs from './Components/Inputs';
import TimeLine from './Components/TimeLine';

const Container = styled.div`
  width:100%;
  max-width:600px;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #e5ddd5;
  border: solid 1px black;
  display: flex;
  flex-direction: column; 
`
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msgList: []
    }
  }

  addMensagem = (author, message) => {
    const newMessage = {
      author,
      message,
    };

    const newMsgList = [...this.state.msgList, newMessage]
    this.setState({
      msgList: newMsgList,
    })
  }

  render() {
    return (
      <Container>
        <TimeLine list={this.state.msgList} />
        <Inputs addMensagem={this.addMensagem} />
      </Container>
    );
  }
}

export default App;
