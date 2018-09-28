import React, { Component } from "react";
import styled from 'styled-components';

import Button from '@material-ui/core/Button';



const ColumnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 500px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${props=>props.player && "height: 100%;width: 25%;"}
    ${props=>props.center && "height: 100%;width: 25%;"}
    ${props=>props.score && "margin-bottom: 100px;"}
    ${props=>props.datum && "margin-top: 75px;"}

`;


const PlayerTitle = styled.div`
    font-size: 25px;
    color: pink;
`;

const ScoreTitle = styled.div`
    font-size: 35px;
    color: ${props => props.playing ? "#F3CD5D" : "#61DAFB"};
    cursor: pointer;
`;

const PointsTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: pink;
    margin-bottom: 30px;
`;

const PointsText = styled.div`
    color: #61DAFB;
    font-weight: bold;
`;

const DatumTitle = styled.div`
    font-size: 30px;
    color: #61DAFB;
    margin: 5px;

`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

const BallDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid pink;
    border-radius: 50%;
    width: 1px;
    height: 1px;
    padding: 20px;
`;

const StyledButton = styled(Button)`
    
    &&{
        background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
        border-radius: 3px;
        border: 0;
        color: white;
        height: 30px;
        width: 50%;
        padding: 0 30px;
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
        margin: 5px;
        cursor: pointer;
    }
`;

class ScoreCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            players: JSON.parse(localStorage.getItem('players')),
            activePlayerOne: true,
            currentPlayers: JSON.parse(localStorage.getItem('players')) ? 
                [
                    JSON.parse(localStorage.getItem('players')).slice(-2)[0], 
                    JSON.parse(localStorage.getItem('players')).slice(-2)[1]
                ] : ["Player One", "Player Two"],
            totalPointsP1: 0,
            safePointsP1: 0,
            missPointsP1: 0,
            foulPointsP1: 0,
            totalPointsP2: 0,
            safePointsP2: 0,
            missPointsP2: 0,
            foulPointsP2: 0,
            ballsLeft: 15
        };

        this.onClickP1Points = this.onClickP1Points.bind(this);
        this.onClickP2Points = this.onClickP2Points.bind(this);
        this.onClickSafe = this.onClickSafe.bind(this);
        this.onClickMiss = this.onClickMiss.bind(this);
        this.onClickFoul = this.onClickFoul.bind(this);
    }

    onClickP1Points(){
        if(this.state.activePlayerOne){
            this.setState({
                totalPointsP1: this.state.totalPointsP1 + 1,
                ballsLeft: this.state.ballsLeft - 1
            });
        }

    }

    onClickP2Points(){
        if(!this.state.activePlayerOne){
            this.setState({
                totalPointsP2: this.state.totalPointsP2 + 1,
                ballsLeft: this.state.ballsLeft - 1
            });
        }
        if(this.state.ballsLeft < 2){
            console.log(this.state.currentPlayers[0].score + 1)
            this.state.currentPlayers[1].score += 1;
            this.state.players.pop();
            this.state.players.push(this.state.currentPlayers[1]);
            localStorage.setItem('players', JSON.stringify(this.state.players)); 
        }
    }

    onClickSafe(){
        if(this.state.activePlayerOne){
            this.setState({
                activePlayerOne: !this.state.activePlayerOne,
                safePointsP1: this.state.safePointsP1 + 1
            });
        }else{
            this.setState({
                activePlayerOne: !this.state.activePlayerOne,
                safePointsP2: this.state.safePointsP2 + 1
            });
        }
    }

    onClickMiss(){
        if(this.state.activePlayerOne){
            this.setState({
                activePlayerOne: !this.state.activePlayerOne,
                missPointsP1: this.state.missPointsP1 + 1
            });
        }else{
            this.setState({
                activePlayerOne: !this.state.activePlayerOne,
                missPointsP2: this.state.missPointsP2 + 1
            });
        }
    }

    onClickFoul(){
        if(this.state.activePlayerOne){
            this.setState({
                activePlayerOne: !this.state.activePlayerOne,
                foulPointsP1: this.state.foulPointsP1 + 1
            }, ()=>{if(this.state.foulPointsP1 > 2){this.setState({totalPointsP1: this.state.totalPointsP1 - 16, foulPointsP1: 0});}});
        }else{
            this.setState({
                activePlayerOne: !this.state.activePlayerOne,
                foulPointsP2: this.state.foulPointsP2 + 1
            }, ()=>{if(this.state.foulPointsP2 > 2){this.setState({totalPointsP2: this.state.totalPointsP2 - 16, foulPointsP2: 0});}});
        }
    }

    render () {

        const {
            activePlayerOne,
            currentPlayers,
            totalPointsP1,
            safePointsP1,
            missPointsP1,
            foulPointsP1,
            totalPointsP2,
            safePointsP2,
            missPointsP2,
            foulPointsP2,
            ballsLeft
        } = this.state

        return (
            <ColumnContainer>
                <Column player>
                    <Column score>
                        <PlayerTitle>{currentPlayers[0].name}</PlayerTitle>
                        <ScoreTitle playing={activePlayerOne} onClick={this.onClickP1Points}>{totalPointsP1}</ScoreTitle>
                    </Column>
                    <Column datum>
                        <DatumTitle>{safePointsP1}</DatumTitle>
                        <DatumTitle>{missPointsP1}</DatumTitle>
                        <DatumTitle>{foulPointsP1}</DatumTitle>
                    </Column>
                </Column>
                <Column center>
                        <PointsTitle>
                            <div>POINTS</div>
                            <PointsText>125</PointsText>
                        </PointsTitle>
                    <BallDiv>
                        <PointsText>{ballsLeft}</PointsText>
                    </BallDiv>
                    <ButtonDiv>
                        <StyledButton onClick={this.onClickSafe}>SAFE</StyledButton>
                        <StyledButton onClick={this.onClickMiss}>MISS</StyledButton>
                        <StyledButton onClick={this.onClickFoul}>FOUL</StyledButton>
                    </ButtonDiv>
                </Column>
                <Column player>
                    <Column score>
                        <PlayerTitle>{currentPlayers[1].name}</PlayerTitle>
                        <ScoreTitle playing={!activePlayerOne} onClick={this.onClickP2Points}>{totalPointsP2}</ScoreTitle>
                    </Column>
                    <Column datum>
                        <DatumTitle>{safePointsP2}</DatumTitle>
                        <DatumTitle>{missPointsP2}</DatumTitle>
                        <DatumTitle>{foulPointsP2}</DatumTitle>
                    </Column>
                </Column>
            </ColumnContainer>
        )
    }
}
            
export default ScoreCard;

