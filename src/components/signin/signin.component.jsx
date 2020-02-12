import React from 'react';

import './signin.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name:'',
			email:''
		}
	}

	handleSubmit = event => (
		event.preventDefault();
		this.setState({name:'',email:''})
	);

	render(){
		return {
			<div className='signin'>
				<h1>I already have an account</h1>
				<span>signin with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<input name='email' type='email' value={this.state.email} required/>
					<label>Email</label>
					<input name='password' type='password' value={this.state.password} required/>
					<label>Password</label>
					<input type='submit' value='Submit Form'/>
				</form>
			</div>
		}
	}
}

export default SignIn;
