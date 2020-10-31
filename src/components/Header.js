import React from 'react';

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subtitle && <p>{props.subtitle}</p>}</h2>
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision App',
};

export default Header


//NB. stateless functional components make the app faster/more efficient. less overhead as we are not extending React.Component
