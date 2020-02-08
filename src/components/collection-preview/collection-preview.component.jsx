import React from 'react';

const collectionPreview({title, items}) => (
		<div>
			<h1>{title}</h1>
			<div className="preview">
				{items.map(item=>(<div>{items.name}</div>)}
			</div>
		</div>
)
