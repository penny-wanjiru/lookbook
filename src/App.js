import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/components/homepage/homepage.component';
import ShopPage from './pages/components/shop/shop.component';
import SigninAndSignup from './pages/components/signin-and-signup/signin-and-signup.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {


	unsubscribeFromAuth = null;

	componentDidMount(){
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
			if (userAuth){
				const userRef = await createUserProfileDocument(userAuth);
				 userRef.onSnapshot(snapShot => {
					 setCurrentUser({
							 id:snapShot.id,
							 ...snapShot.data()
					 });
				 });
			}
			setCurrentUser({userAuth});
	})
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

	render (){
	  return (
	    <div className="App">
				<Header/>
				<Switch>
					<Route exact path='/' component={ HomePage }/>
					<Route exact path='/shop' component={ ShopPage }/>
					<Route exact path='/signin' render={() => this.props.currentUser? (<Redirect to='/'/>) : (<SigninAndSignup/>)}/>
				</Switch>
	    </div>
	  );
	}
}
const mapStateToProps = ({user}) =>({
	currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
