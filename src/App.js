import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/Glogal-styles';
import Character from './components/Character';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Character} />
          <Route path="/:id" exact component={Character} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
