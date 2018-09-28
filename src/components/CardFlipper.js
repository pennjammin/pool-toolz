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
  height: 536px;
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

const RightArrow = styled(KeyboardArrowRight)`
    display: flex;
    align-items: center;
    position: absolute;
    top: 390px;
    bottom: 0px;
    left: 226px;
    color: #E7E7EA;
`

const LeftArrow = styled(KeyboardArrowLeft)`
    display: flex;
    align-items: center;
    position: absolute;
    top: 390px;
    bottom: 0px;
    left: 226px;
    color: #E7E7EA;

    :hover{
        color: #C1C1C1;
      }
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
                    <Front>
                        <FlexColumn>
                            {this.props.children[0]}
                        </FlexColumn>
                        <RightArrow onClick={this.flip} size='50'></RightArrow>
                    </Front>
                    <Back>
                        <FlexColumn>
                            {this.props.children[1]}
                        </FlexColumn>
                        <LeftArrow onClick={this.flip} size='50'></LeftArrow>
                    </Back>
                </Flipper>
            </FlipContainer>
        )
    }
}
            
export default CardFlipper;


