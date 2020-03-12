import React from 'react';

import { ReactComponent as ShoppingIcon } from '../assets/11.2 shopping-bag.svg.svg';

import './cart.styles.scss';

const cartIcon = () => {
	<div className='cart-icon'>
		<ShoppingIcon className='shopping-icon'/>
		<span className='items-count'>0</span>
	</div>

}

export default cartIcon;
