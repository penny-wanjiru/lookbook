import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/components/homepage/homepage.component';
import ShopPage from './pages/components/shop/shop.component';
import SigninAndSignup from './pages/components/signin-and-signup/signin-and-signup.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils'

class App extends React.Component {

	constructor(){
		super();
		this.state = {currentUser:null};
	}

	unsubscribeFromAuth = null;

	componentDidMount(){
		this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
		this.setState({currentUser:user});
		console.log(user);
	})
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

	render (){
	  return (
	    <div className="App">
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path='/' component={ HomePage }/>
					<Route exact path='/shop' component={ ShopPage }/>
					<Route exact path='/signin' component={ SigninAndSignup }/>
				</Switch>
	    </div>
	  );
	}
}

export default App;
