import React from 'react';
import styled from 'styled-components';

const LearMoreStyled = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 25px;
  text-transform: uppercase;
  background-image: url("/images/learn-more.svg");
  background-repeat: no-repeat;
  background-position: left 170px bottom 5px;
`

function LearMore() {
    return (
        <LearMoreStyled>
            Learn More
        </LearMoreStyled>
    );
}

export default LearMore;