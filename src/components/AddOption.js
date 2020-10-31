import React from 'react';

 class AddOption extends React.Component {

	state = {
		error: undefined
		//initiating error state as undefined, so it can be set later if it comes up
	}
	
	handleAddOption = (e) => {
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

export default AddOption