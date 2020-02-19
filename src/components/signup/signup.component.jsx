import React from 'react';

import Form from '../form/form.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './signup.styles.scss';


class SignUp extends React.Component {
	constructor(){
		super();
		this.state = {
			displayName:'',
			email:'',
			password:'',
			confirmPassword:''
		}
	}
	render(){
		return ()
			<div className='sign-up'>
				<h2 className='title'> I don't have an account</h3>
				<span> Sign up with your email and password</span>

			</div>

	}
}
