import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, googleSignin, ...otherProps}) => (
	<button className={`${googleSignin ? 'google-signin':''} custom-button`} {...otherProps}>
	{children}
	</button>
)

export default CustomButton;
