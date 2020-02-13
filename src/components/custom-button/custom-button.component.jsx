import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, ...otherProps}) => (
	<button className='custom-button' {...otherProps}>
	Sign In
	</button>
)

export default CustomButton;
