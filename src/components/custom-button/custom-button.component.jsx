import React from 'react';

import './custom-button.styles.scss';

const CustonButton = ({children, ...otherProps}) => (
	<button className='custom-button' {...otherProps}>
	Sign In
	</button>
)
