import React from 'react';
import {shopData} from './shop.data'

class Shop extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			collections: shopData
		}
	}
}
