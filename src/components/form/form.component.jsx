import React from 'react';

import './form.styles.scss'

const Form =({handleChange, label, ...otherFormProps})=> (
	<div className='group'>
		<input className='form-input' onChange={handleChange} {...otherFormProps} />
		{
			label?(
			<label className={`${otherFormProps.value.length?'shrink':''} form-input-label`}>
			{label}
			</label>
			)
			:null
		}
	</div>
);

export default Form;
