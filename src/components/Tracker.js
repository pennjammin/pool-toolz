import React, { Component } from "react";
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ScoreCard from './ScoreCard.js';

const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 100px 0;
`;

const SubmitForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledTextField = styled(TextField)`
    &&{
        margin: 50px;
    }
`;

const StyledButton = styled(Button)`
    &&{
        background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
        border-radius: 3px;
        border: 0;
        color: white;
        height: 48px;
        padding: 0 30px;
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
        cursor: pointer;
    }
`;

class Tracker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gamePlay: false,
            players: []
        };
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            players: this.state.players.push({name: this.playerOne.value, score: 0}, {name: this.playerTwo.value, score:0})
        }, ()=>{this.switchOnGameplay();});

        localStorage.setItem('players', JSON.stringify(this.state.players));        
    }

    hydrateStateWithLocalStorage() {
        for (let key in this.state) {
          if (localStorage.hasOwnProperty(key)) {
            let value = localStorage.getItem(key);
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
            } catch (e) {
              this.setState({ [key]: value });
            }
          }
        }
    }

    switchOnGameplay() {
        this.setState({
            gamePlay: true
        });
    }

    render () {

     if(this.state.gamePlay === false) {   
        return (
            <PlayerContainer>
                <SubmitForm onSubmit={this.onSubmit}>
                    <StyledTextField
                        inputRef={(elm) => {
                            this.playerOne = elm;
                        }}
                        id="name" 
                        type="name"
                        label="Player 1:"
                        required
                        error
                    />
                    <StyledTextField
                        inputRef={(elm) => {
                            this.playerTwo = elm;
                        }}
                        id="name"
                        type="name"
                        label="Player 2:"
                        required
                        error
                    />
                    <StyledButton type="submit">
                        PLAY BALL!
                    </StyledButton>
                </SubmitForm>
            </PlayerContainer>
            )
        } else {
            return (
                <PlayerContainer>
                    <ScoreCard></ScoreCard>
                </PlayerContainer>
            )
        }
    }
}
            
export default Tracker;

