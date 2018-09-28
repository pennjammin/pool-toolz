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
    justify-content: center;
    height: 100%;
    width: 25%;
`;

const CenterColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 25%;
`;

const PlayerTitle = styled.div`
    font-size: 25px;
    color: pink;
`;

const Score = styled.div`
    font-size: 35px;
    color: pink;
`;

const StyledButton = styled(Button)`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

const PLAYERS = JSON.parse(localStorage.getItem('players')).slice(-2);

class ScoreCard extends Component {

    render () {
        return (
            <ColumnContainer>
                <PlayerColumn>
                    <PlayerTitle>
                        {PLAYERS[0]}
                        <Score>5</Score>
                        <Score>5</Score>
                    </PlayerTitle>
                </PlayerColumn>
                <CenterColumn>
                    <StyledButton>SAFE</StyledButton>
                    <StyledButton>MISS</StyledButton>
                    <StyledButton>FOUL</StyledButton>
                </CenterColumn>
                <PlayerColumn>
                    <PlayerTitle>
                        {PLAYERS[1]}
                        <Score>24</Score>
                    </PlayerTitle>
                </PlayerColumn>
            </ColumnContainer>
        )
    }
}
            
export default ScoreCard;

