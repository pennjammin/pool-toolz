import React, { Component } from "react";
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 100px 0;
`;

const StyledTextField = styled(TextField)`
    &&{
        margin: 50px;
    }
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

class Tracker extends Component {


    render () {

        return (
            <PlayerContainer>
                <StyledTextField 
                    id="name" 
                    type="name"
                    label="Player 1:"
                />
                <StyledTextField 
                    id="name" 
                    type="name"
                    label="Player 2:"
                />
                <StyledButton>
                    <p>YAY</p>
                </StyledButton>
            </PlayerContainer>
        )
    }
}
            
export default Tracker;

