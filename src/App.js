import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/components/homepage/homepage.component';

function App() {
  return (
    <div className="App">
		<Switch>
			<Route exact path='/' component={ HomePage }/>
		</Switch>
    </div>
  );
}

export default App;
