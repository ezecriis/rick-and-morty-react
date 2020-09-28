import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import API from '../api';

const api = new API()
const CharacterStyled = styled.div`

`

function Character() {
    const [character, setcharacter] = useState({});
    useEffect(() => {
        async function getCharacter() {
            setcharacter(await api.getCharacter(1))
            // const character = await api.getCharacter(1)
            // console.log(character);
        }
        getCharacter()
    }, []);
    return (
        <CharacterStyled>
            {character.name}
        </CharacterStyled>
    );
}

export default Character;