class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		const options = [];

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action />
				<Options options={options} />
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
	handlePick() {
		alert('handlePick');
	}
	render() {
		return (
			<div>
				<button onClick={this.handlePick}>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this); //we are binding this so we dont have to keep binding every time we call handleRemoveAll below in render function
	}
	handleRemoveAll() {
		// alert('removeAll');
	}
	render() {
		return (
			<div>
				<button onClick={this.handleRemoveAll}>Remove All</button>
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
		if(option){
			alert(option);
		}
		
	
	};
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
