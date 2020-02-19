import React from 'react';

import Form from '../form/form.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './signup.styles.scss';


class SignUp extends React.Component {
	const {displayName, email, password, confirmPassword} = this.state;
	constructor(){
		super();
		this.state = {
			displayName:'',
			email:'',
			password:'',
			confirmPassword:''
		}
	}

	handleSubmit = async event =>{
		event.preventDefault();
		const {displayName, email, password, confirmPassword} = this.state;
		if(password != confirmPassword){
			alert("Passwords dont match")
			return;
		}
		try {
			const {user} = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, {displayName})
			this.setState({
				displayName:'',
				email:'',
				password:'',
				confirmPassword:''
			});
			}catch(error){
					console.log(error);
		}

	}

	handleChange = event => {
		const {name, value} = event.target;
		this.setState({[name]:value});
	}

	render(){
		return ()
			<div className='sign-up'>
				<h2 className='title'> I don't have an account</h3>
				<span> Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange}/>
					<FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required/>
					<FormInput type='password' name='password' value={password} onChange={this.handleChange}required/>
					<FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange}required/>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</div>

	}
}

export default SignUp;
