import React from 'react';

const CollectionPreview = ({title, items}) => (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className="preview">
				{items.map(item=>(
					<div key={items.name}>{items.name}</div>
				))}
			</div>
		</div>
);


export default CollectionPreview;
