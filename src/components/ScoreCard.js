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

const PlayerColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%;
`;

const CenterColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%;
`;

const ScoreColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`;

const DatumColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 75px;
`;

const PlayerTitle = styled.div`
    font-size: 25px;
    color: pink;
`;

const ScoreTitle = styled.div`
    font-size: 35px;
    color: ${props => props.playing ? "#F3CD5D" : "#61DAFB"};
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
    }
`;

class ScoreCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            activePlayerOne: true,
            currentPlayers: JSON.parse(localStorage.getItem('players')) ? JSON.parse(localStorage.getItem('players')).slice(-2) : ["Player One", "Player Two"],
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

        this.onClickSafe = this.onClickSafe.bind(this);
        this.onClickMiss = this.onClickMiss.bind(this);
        this.onClickFoul = this.onClickFoul.bind(this);
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
            });
        }else{
            this.setState({
                activePlayerOne: !this.state.activePlayerOne,
                foulPointsP2: this.state.foulPointsP2 + 1
            });
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
                <PlayerColumn>
                    <ScoreColumn>
                        <PlayerTitle>{currentPlayers[0]}</PlayerTitle>
                        <ScoreTitle playing={activePlayerOne}>{totalPointsP1}</ScoreTitle>
                    </ScoreColumn>
                    <DatumColumn>
                        <DatumTitle>{safePointsP1}</DatumTitle>
                        <DatumTitle>{missPointsP1}</DatumTitle>
                        <DatumTitle>{foulPointsP1}</DatumTitle>
                    </DatumColumn>
                </PlayerColumn>
                <CenterColumn>
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
                </CenterColumn>
                <PlayerColumn>
                    <ScoreColumn>
                        <PlayerTitle>{currentPlayers[1]}</PlayerTitle>
                        <ScoreTitle playing={!activePlayerOne}>{totalPointsP2}</ScoreTitle>
                    </ScoreColumn>
                    <DatumColumn>
                        <DatumTitle>{safePointsP2}</DatumTitle>
                        <DatumTitle>{missPointsP2}</DatumTitle>
                        <DatumTitle>{foulPointsP2}</DatumTitle>
                    </DatumColumn>
                </PlayerColumn>
            </ColumnContainer>
        )
    }
}
            
export default ScoreCard;

