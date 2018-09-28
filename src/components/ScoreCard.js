import React, { Component } from "react";
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const ColumnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
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

const PlayerTitle = styled.div`
    font-size: 25px;
    color: pink;
`;

const ScoreTitle = styled.div`
    font-size: 35px;
    color: pink;
`;

const DatumTitle = styled.div`
    margin: 10px;
    font-size: 30px;
    color: pink;
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
            currentPlayers: JSON.parse(localStorage.getItem('players')) ? JSON.parse(localStorage.getItem('players')).slice(-2) : ["Player One", "Player Two"],
            totalPointsP1: 0,
            safePointsP1: 0,
            missPointsP1: 0,
            foulPointsP1: 0,
            totalPointsP2: 0,
            safePointsP2: 0,
            missPointsP2: 0,
            foulPointsP2: 0
        };

        this.onClickSafe = this.onClickSafe.bind(this);
        this.onClickMiss = this.onClickSafe.bind(this);
        this.onClickFoul = this.onClickSafe.bind(this);
    }

    onClickSafe(){

    }

    onClickSafe(){

    }

    onClickSafe(){

    }

    render () {

        const {
            currentPlayers,
            totalPointsP1,
            safePointsP1,
            missPointsP1,
            foulPointsP1,
            totalPointsP2,
            safePointsP2,
            missPointsP2,
            foulPointsP2
        } = this.state

        return (
            <ColumnContainer>
                <PlayerColumn>
                    <ScoreColumn>
                        <PlayerTitle>{currentPlayers[0]}</PlayerTitle>
                        <ScoreTitle>{totalPointsP1}</ScoreTitle>
                    </ScoreColumn>
                    <DatumTitle>{safePointsP1}</DatumTitle>
                    <DatumTitle>{missPointsP1}</DatumTitle>
                    <DatumTitle>{foulPointsP1}</DatumTitle>
                </PlayerColumn>
                <CenterColumn>
                    <div>Balls</div>
                    <div>Balls</div>
                    <div>Balls</div>
                    <div>Balls</div>
                    <StyledButton>SAFE</StyledButton>
                    <StyledButton>MISS</StyledButton>
                    <StyledButton>FOUL</StyledButton>
                </CenterColumn>
                <PlayerColumn>
                    <ScoreColumn>
                        <PlayerTitle>{currentPlayers[1]}</PlayerTitle>
                        <ScoreTitle>{totalPointsP2}</ScoreTitle>
                    </ScoreColumn>
                    <DatumTitle>{safePointsP2}</DatumTitle>
                    <DatumTitle>{missPointsP2}</DatumTitle>
                    <DatumTitle>{foulPointsP2}</DatumTitle>
                </PlayerColumn>
            </ColumnContainer>
        )
    }
}
            
export default ScoreCard;

