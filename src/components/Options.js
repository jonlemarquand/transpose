import React from 'react';

import './Options.scss';

const Options = ({active, setActiveOption}) => {

	let updateOption = (value) => {
		setActiveOption(value.target.value);
	}

	return (
		<div className="options" onChange={updateOption}>
			<div className="radio">		
				<label>
					<input type="radio" value="c" name="instrument" checked={active === 'c'} readOnly/>
					Piano
				</label>
			</div>
			<div className="radio">
				<label>
					<input type="radio" value="f" name="instrument" checked={active === 'f'} readOnly />
					French Horn
				</label>
			</div>
			<div className="radio">
				<label>
					<input type="radio" value="eb" name="instrument" checked={active === 'eb'} readOnly />
					Tenor Horn
				</label>
			</div>
			<div className="radio">
				<label>
					<input type="radio" value="bb" name="instrument" checked={active === 'bb'} readOnly />
					Trumpet
				</label>
			</div>
		</div>
	)
}

export default Options;