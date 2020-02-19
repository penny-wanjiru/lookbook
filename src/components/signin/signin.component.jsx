import React from 'react';

import './signin.styles.scss';
import Form from '../form/form.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email:'',
			password:''
		}
	}

	handleSubmit = event => (
		event.preventDefault(),
		this.setState({name:'',email:''})
	);

	handleChange = event => {
		const {name, value} = event.target;
		this.setState({[name]:value});
	}

	render(){
		return (
			<div className='signin'>
				<h1>I already have an account</h1>
				<span>Signin with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<Form label='Email' handleChange={this.handleChange} name='email' type='email' value={this.state.email} required/>
					<Form label='password' name='password' type='password' value={this.state.password} required/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} googleSignin >Sign in with Google</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;
