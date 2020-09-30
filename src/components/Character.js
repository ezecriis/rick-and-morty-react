import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CharacterName from './../components/Character-name';
import CharacterImage from './../components/Character-image';
import CharacterDescription from './../components/Character-description';
import CharacterPlaceholder from './../components/Character-placeholder';
import CharacterContext from './../components/Character-context';
import Layout from './../components/Layout';
import Next from './../components/Next';
import api from './../api';

const CharacterStyled = styled.div`

`

function Character({ match }) {
    const [character, setCharacter] = useState({});
    useEffect(() => {
        async function getCharacter() {
            setCharacter(await api.getCharacter(match.params.id || 1))
        }
        getCharacter()
    }, [match.params.id]);
    return (
        <CharacterStyled>
            <CharacterContext.Provider value={{
                character,
                setCharacter
            }}>
                <CharacterPlaceholder name={character.name} />
                <Layout
                    next={<Next />}
                    name={<CharacterName name={character.name} />}
                    image={<CharacterImage image={character.image} name={character.name} />}
                    description={<CharacterDescription gender={character.gender} species={character.species} status={character.status} />}
                />
            </CharacterContext.Provider>
        </CharacterStyled>
    );
}

export default Character;