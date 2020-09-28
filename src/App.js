import React, { useEffect, useState } from 'react';
import './App.css';
// import Character from './componenets/Character';
import CharacterName from './componenets/Character-name';
import CharacterImage from './componenets/Character-image';
import CharacterDescription from './componenets/Character-description';
import CharacterPlaceholder from './componenets/Character-placeholder';
import API from './api';

const api = new API()

function App() {
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
    <div className="App">
      {/* <Character /> */}
      
      <CharacterPlaceholder name={character.name} />

      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>
        <img className="logo" src="./static/images/logo@2x.png" width="280" alt="" />
        <div className="social">
          <a href="https://instagram.com/LeonidasEsteban">
            <img src="./static/images/instagram.svg" alt="" />
          </a>
          <a href="https://facebook.com/LeonidasEsteban">
            <img src="./static/images/facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com/LeonidasEsteban">
            <img src="./static/images/twitter.svg" alt="" />
          </a>
        </div>
        <div className="navigation name">
          <a href="#">Name</a>
        </div>
        <CharacterName name={character.name} />
        <CharacterImage image={character.image} name={character.name} />
        
        <div className="navigation about">
          <a href="#">About</a>
        </div>

        <CharacterDescription gender={character.gender} species={character.species}  status={character.status} />

        <span className="asset bottom">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>

        <div></div>
        <div className="learn-more">
          <span>learn more</span>
        </div>

        <div className="arrow" id="load-next"></div>

      </div>
    </div>
  );
}

export default App;
