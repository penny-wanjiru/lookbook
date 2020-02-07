import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/components/homepage/homepage.component';
import ShopPage from './pages/components/shop/shop.component';


function App() {
  return (
    <div className="App">
			<Switch>
				<Route exact path='/' component={ HomePage }/>
				<Route exact path='/shop' component={ ShopPage }/>
			</Switch>
    </div>
  );
}

export default App;
