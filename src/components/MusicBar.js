import React from "react";
import styled, { keyframes } from "styled-components";

const MusicBar = () => {
    return (
        <Playing>
            <Bar style={Bars.b1}>A</Bar>
            <Bar style={Bars.b2}>B</Bar>
            <Bar style={Bars.b3}>C</Bar>
            <Bar style={Bars.b4}>D</Bar>
            <Bar style={Bars.b5}>E</Bar>
            <Bar style={Bars.b6}>F</Bar>
            <Bar style={Bars.b7}>G</Bar>
            <Bar style={Bars.b8}>H</Bar>
        </Playing>
    );
};

const Pulse = keyframes`
  0% {
    height: 1px;
    margin-top: 0;
  }
  10% {
    height: 40px;
    margin-top: -40px;
  }
  50% {
    height: 20px;
    margin-top: -20px;
  }
  60% {
    height: 30px;
    margin-top: -30px;
  }
  80% {
    height: 60px;
    margin-top: -60px;
  }
  100% {
    height: 1px;
    margin-top: 0;
  }
`

const Playing = styled.div`
    position: relative;
    top: 50%;
    left: 5%;
    width: auto;
    transform: translateX(-50%) translateY(-50%);
`;

const Bar = styled.span`
    display: inline-block;
    position: relative;
    margin-right: 1px;
    width: 10px;
    height: 1px;
    overflow: hidden;
    background: linear-gradient(to bottom, #ff9500, #ff5e3a);
    color: transparent;
    animation-name: ${Pulse};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

const Bars = {
    b1: {
        animationDelay: "0.5s",
    },
    b2: {
        animationDelay: "0.2s",
    },
    b3: {
        animationDelay: "1.2s",
    },
    b4: {
        animationDelay: "0.9s",
    },
    b5: {
        animationDelay: "2.3s",
    },
    b6: {
        animationDelay: "1.3s",
    },
    b7: {
        animationDelay: "3.1s",
    },
    b8: {
        animationDelay: "1.9s",
    },
}

export default MusicBar;