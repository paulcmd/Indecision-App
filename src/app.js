class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: props.options
		};
	}

	componentDidMount() {
		try {
			const jsonOptions = localStorage.getItem('options');
			const options = JSON.parse(jsonOptions);

			if (options) {
				this.setState(() => ({ options })); //i.e setting options: options
			}
		} catch (err) {
			//if error, do nothing at all. fall back to default values
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const jsonOptions = JSON.stringify(this.state.options);
			localStorage.setItem('options', jsonOptions);
		}
		//if new options are set in options array, take new items and store in localStorage
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] })); //we use parenthesis around brackets for the short hand arrow method, or else the function will assume we are scoping
	}

	handleDeleteOption(optionToDelete) {
		this.setState((prevState) => ({
			options: prevState.options.filter(
				(option) => optionToDelete !== option
			),
		}));
		//changed option argument to optionToDelete to differentiate the variables
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length); //has to be same length as array
		const option = this.state.options[randomNum]; // From options array, we are picking a random index of an item equivalent to a random number generated
		alert(option);
	}

	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value to return item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This item already exists';
		}
		this.setState((prevState) => ({
			options: prevState.options.concat(option),
		}));
		//prevState.options.push(option); do not manipulate state manually. deconstruct and concat
	}
	render() {
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 1}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: [],
};

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

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started!</p>}

			{props.options.map((option, index) => (
				<Option
					key={index}
					optionText={option}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))}
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button
				onClick={(e) => {
					props.handleDeleteOption(props.optionText);
				}}
			>
				Remove
			</button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined,
			//initiating error state as undefined, so it can be set later if it comes up
		};
	}
	handleAddOption(e) {
		//functions in components are declared without const and without the arrow. this 1st handleAddOption is preventing default. it belongs to this component
		e.preventDefault();

		const option = e.target.elements.option.value.trim(); //trim spaces before and after text. also doesn't display empty strings
		const error = this.props.handleAddOption(option);
		//we are passing option to the handleAddOption in the parent component(Indecision). The only return expected is the error, else option was concatenated well.

		this.setState(() => ({ error }));
		//set the undefined error to error ie error: error

		if (!error) {
			e.target.elements.option.value = '';
		}
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type='text' name='option' />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(
	<IndecisionApp options={['Car', 'tv']} />,
	document.getElementById('app')
);

//NB. stateless functional components make the app faster/more efficient. less overhead as we are not extending React.Component
