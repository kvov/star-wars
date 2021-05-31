import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Planets from './Planets';
import Planet from './Planet';
import './App.css';
// import Statistics from './Statistics';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Planets} />
          <Route path="/:id" exact component={Planet} />
          {/* <Route path="/statistics" exact component={Statistics} /> */}
        </Switch> 
    </BrowserRouter>
    </div>
  );
}

export default App;
