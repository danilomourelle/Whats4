import React from 'react';

import Inputs from './Components/Inputs';
import Messenger from './Components/messenger';
import styled from 'styled-components'

const Container = styled.div`
  width:32%;
  min-width:300px;

  background-color: #e5ddd5;
  min-height: 100vh;
  position:relative;
  left: 50%;
  transform: translate(-50%,0);
  border: solid 1px black;
`
function App() {
  return (

    <Container>
      <Inputs></Inputs>
    </Container>


  );
}

export default App;
