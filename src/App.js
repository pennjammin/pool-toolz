import React, { Component } from 'react';
import styled from 'styled-components';

import eightBall from './static/eight-jawn.svg';
import rings from './static/rings.svg';
import felt from './static/pool_table.png';

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  background-repeat: x-repeat;
  background-image: url(${felt});
  min-height: 100%;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const LayeredImages = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

const Rings = styled.img`
  position: relative;
  height: 175px;
  top: 0;
  left: 0;
`;

const EightBall = styled.img`
  height: 30px;
  position: absolute;
  top: 73px;
  left: 109px;

  :hover {
    animation: App-logo-spin .5s linear;
  }

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); } 
  }
`;




class App extends Component {
  render() {
    return (
      <AppDiv className="App">
        <LayeredImages>
          <Rings src={rings} alt=""/>
          <EightBall src={eightBall} />
        </LayeredImages>
      </AppDiv>
    );
  }
}

export default App;