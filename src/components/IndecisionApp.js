import React from 'react';

import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'



class IndecisionApp extends React.Component {

    state = {
		options : [],
		selectedOption: undefined
    }

    handleDeleteOptions = () => {
		this.setState(() => ({ options: [] })); //we use parenthesis around brackets for the short hand arrow method, or else the function will assume we are scoping
	}

	handleDeleteOption = (optionToDelete) => {
		this.setState((prevState) => ({
			options: prevState.options.filter(
				(option) => optionToDelete !== option
			),
		}));
		//changed option argument to optionToDelete to differentiate the variables
	}

	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length); //has to be same length as array
		const option = this.state.options[randomNum]; // From options array, we are picking a random index of an item equivalent to a random number generated
		console.log(option)
		this.setState(() => ({
			selectedOption: option
		}))
	}

	handleDeleteModalOption = () => {
		this.setState(() => ({selectedOption: undefined}))
	}

	handleAddOption = (option) => {
		if (!option) {
			return 'Enter valid value to return item';
		} else if (this.state.options.indexOf(option) > -1) {
            //checks for a duplicate
			return 'This item already exists';
		}
		this.setState((prevState) => ({
			options: prevState.options.concat(option),
		}));
		//prevState.options.push(option); do not manipulate state manually. deconstruct and concat
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
				<OptionModal 
				selectedOption={this.state.selectedOption}
				handleDeleteModalOption={this.handleDeleteModalOption}
				/>
			</div>
		);
	}
}


export default IndecisionApp;