import React, { Component } from "react";
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

class Tracker extends Component {


    render () {

        return (
            <PlayerContainer>
                <TextField 
                    id="name" 
                    type="name"
                    label="Player 1:"
                />
                <TextField 
                    id="name" 
                    type="name"
                    label="Player 2:"
                />
            </PlayerContainer>
        )
    }
}
            
export default Tracker;

