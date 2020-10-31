import React from 'react';


const Action = (props) => {
	return (
		<div>
			<button
				onClick={props.handlePick}
				disabled={!props.hasOptions} //true if there are options, so flip it to disable
			>
				What should I do?
			</button>
		</div>
	);
};


export default Action