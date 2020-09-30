import React from 'react';
import styled from 'styled-components';


const SocialStyled = styled.div`
    a {
        text-decoration: none;
    }
    @media screen and (max-width: 1024px) {
    a {
        margin-left: 2em;
    }
    a:first-child {
        margin-left:0;
    }
    }
`

function Social() {
    return (
        <SocialStyled>
            <div className="social">
                <a href="https://www.instagram.com/ezecriis/">
                    <img src="./images/instagram.svg" alt="" />
                </a>
                <a href="https://www.facebook.com/EzeCriis/">
                    <img src="./images/facebook.svg" alt="" />
                </a>
                <a href="https://twitter.com/EzeCriis">
                    <img src="./images/twitter.svg" alt="" />
                </a>
            </div>
        </SocialStyled>
    );
}

export default Social
