import React from 'react';

const Form =({handleChange, label, ...otherFormProps})=> (
	<div className='group'>
		<input className='form-input' onChange={handleChange} {...otherFormProps} />
		{
			label?
				<label className={`${otherFormProps.value.length?'shrink':''} form-input-label`}/>
			:null
		}
	</div>
);

export default Form;
