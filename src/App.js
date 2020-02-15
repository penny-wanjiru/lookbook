import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/components/homepage/homepage.component';
import ShopPage from './pages/components/shop/shop.component';
import SigninAndSignup from './pages/components/signin-and-signup/signin-and-signup.component';
import Header from './components/header/header.component';
import {auth} from '.firebase'

class App extend from React.Component {
	render(
	  return (
	    <div className="App">
				<Header/>
				<Switch>
					<Route exact path='/' component={ HomePage }/>
					<Route exact path='/shop' component={ ShopPage }/>
					<Route exact path='/signin' component={ SigninAndSignup }/>
				</Switch>
	    </div>
	  );
	}
)

export default App;
