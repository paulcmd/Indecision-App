class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this)
		this.state = {
			options: ['1', '2'],
		};
	}

	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: [],
			};
		});
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length); //has to be same length as array
		const option = this.state.options[randomNum]; // From options array, we are picking a random index of an item equivalent to a random number generated
		alert(option);
	}
	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action 
				hasOptions={this.state.options.length > 1}
				handlePick={this.handlePick}
				 />
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
				/>
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button
					onClick={this.props.handlePick}
					disabled={!this.props.hasOptions} //true if there are options, so flip it to disable
				>
					What should I do?
				</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.handleDeleteOptions}>
					Remove All
				</button>
				{this.props.options.map((option, index) => (
					<Option key={index} optionText={option} />
				))}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return <div>{this.props.optionText}</div>;
	}
}

class AddOption extends React.Component {
	handleAddOption(e) {
		//functions in components are declared without const and without the arrow
		e.preventDefault();

		const option = e.target.elements.option.value.trim(); //trim spaces before and after text. also doesn't display empty strings
		if (option) {
			alert(option);
		}
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type='text' name='option' />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
