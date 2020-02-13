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
				<span>signin with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} label='Email' name='email' type='email' value={this.state.email} required/>
					<input onChange={this.handleChange} label='password' name='password' type='password' value={this.state.password} required/>
					<input type='submit' value='Submit Form'/>
				</form>
			</div>
		)
	}
}

export default SignIn;
