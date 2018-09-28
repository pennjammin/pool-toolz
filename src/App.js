import React, { Component } from 'react';
import styled from 'styled-components';
import Leaderboard from './components/Leaderboard.js';
import CardFlipper from './components/CardFlipper.js'
import Tracker from './components/Tracker.js'

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
  height: 125px;
  top: 0;
  left: 115px;
  margin-left: 50px;
`;

const EightBall = styled.img`
  height: 20px;
  position: absolute;
  top: 53px;
  left: 193px;
  margin-left: 50px;

  :hover {
    animation: App-logo-spin .5s linear;
  }

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); } 
  }
`;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [ {name: `Penn`, score: 1}, ],
      paginate: 10
    };
  }

  render() {
    return (
      <AppDiv className="App">
      <div>
        <LayeredImages>
          <Rings src={rings} alt=""/>
          <EightBall src={eightBall} />
        </LayeredImages>
        <CardFlipper>
          <Tracker></Tracker>
          <div>
            <Leaderboard users={this.state.users} paginate={this.state.paginate}/>
          </div>
        </CardFlipper>
        </div>
      </AppDiv>
    );
  }
}

export default App;
