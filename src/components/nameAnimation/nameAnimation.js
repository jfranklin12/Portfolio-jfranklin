import React from "react";
import styled, { keyframes } from "styled-components";

function NameAnimation() {
    const nameArray = "Julian Franklin".split("")

    return <Title>{nameArray.map((item, index) => (
            <span key={index}>{item}</span>
))}</Title>

}

const animation = keyframes`
0% { opacity: 0 }
100% { opacity: 1 }
`

const Title = styled.span`
diplay: inline-block;



span {
    diplay: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    font-size: 147%;
    
}
span:nth-child(1) {
    animation-delay: 0.3s;
}
span:nth-child(2) {
    animation-delay: .6s;
}
span:nth-child(3) {
    animation-delay: .9s;
}
span:nth-child(4) {
    animation-delay: 1.2s;
}
span:nth-child(5) {
    animation-delay: 1.5s;
}
span:nth-child(6) {
    animation-delay: 1.8s;
}
span:nth-child(7) {
    animation-delay: 2.1s;
}
span:nth-child(8) {
    animation-delay: 2.4s;
}
span:nth-child(9) {
    animation-delay: 2.7s;
}
span:nth-child(10) {
    animation-delay: 3.0s;
}
span:nth-child(11) {
    animation-delay: 3.3s;
}
span:nth-child(12) {
    animation-delay: 3.6s;
}
span:nth-child(13) {
    animation-delay: 3.9s;
}
span:nth-child(14) {
    animation-delay: 4.2s;
}
span:nth-child(15) {
    animation-delay: 4.5s;
}
`

export default NameAnimation;