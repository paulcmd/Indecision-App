class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false,
		};
	}

	handleToggleVisibility() {
		this.setState((prevState) => {
			return (prevState.visibility = !prevState.visibility);
		});
		//console.log(prevState.visibility)
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? 'Hide details' : 'Show details'}
				</button>
				{this.state.visibility && (
					<div>
						<p>'Hey, these are the details you can now see</p>
					</div>
				)}
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//console.log('Build-it-visible.js is running');

// let visibility = false;

// const toggleVisibility = () => {
// 	//switches visibility from true to false or vice versa
// 	visibility = !visibility;
// 	renderVisible();
// };

// const appRoot = document.getElementById('app');

// const renderVisible = () => {
// 	const template = (
// 		<div>
// 			<p>
// 				<h1>Visibility Toggle</h1>
// 			</p>
// 			<button onClick={toggleVisibility}>
// 				{visibility ? 'Hide details' : 'Show details'}
// 			</button>

// 			{visibility && (
// 				<div>
// 					<p>'Hey, these are details you can now see!'</p>
// 				</div>
// 			)}
// 		</div>
// 	);

// 	// onClick, toggle text on button
// 	//

// 	ReactDOM.render(template, appRoot);
// };

// renderVisible();
