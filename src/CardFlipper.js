import React, { Component } from "react";
import styled from 'styled-components';
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight.cjs';
import { KeyboardArrowLeft } from 'styled-icons/material/KeyboardArrowLeft.cjs';

const Flipper = styled.div`
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  transform: ${props => props.flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`

const FlipContainer = styled.div`
  perspective: 1000px;
  width: 500px;
  height: 536px;
`

const Front = styled.div`
  width: 500px;
  height: 536px;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transform: rotateY(0deg);
`

const Back = styled.div`
  width: 500px;
  height: 500px;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
`

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FlexRow = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 580px;
    bottom: 0px;
    left: 200px;
`

class CardFlipper extends Component {


    constructor(props) {
        super(props);
        this.state = { 
            flipped: false
        };
        this.flip = this.flip.bind(this);
    }

    flip = () => {
        this.setState({flipped: !this.state.flipped})
    }


    render () {

        return (
            <FlipContainer>
                <Flipper flipped={this.state.flipped}>
                    <Front  onClick={this.flip}>
                        <FlexColumn>
                            {this.props.children[0]}
                            <FlexRow><KeyboardArrowRight size='45'></KeyboardArrowRight></FlexRow>
                        </FlexColumn>
                    </Front>
                    <Back>
                        <FlexColumn>
                            {this.props.children[1]}
                            
                        </FlexColumn>
                        <FlexRow onClick={this.flip}><KeyboardArrowLeft size='45'></KeyboardArrowLeft></FlexRow>
                    </Back>
                </Flipper>
            </FlipContainer>
        )
    }
}
            
export default CardFlipper;


