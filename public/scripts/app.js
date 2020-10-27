'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
		_this.state = {
			options: props.options
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var jsonOptions = localStorage.getItem('options');
				var options = JSON.parse(jsonOptions);

				if (options) {
					this.setState(function () {
						return { options: options };
					}); //i.e setting options: options
				}
			} catch (err) {
				//if error, do nothing at all. fall back to default values
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.options.length !== this.state.options.length) {
				var jsonOptions = JSON.stringify(this.state.options);
				localStorage.setItem('options', jsonOptions);
			}
			//if new options are set in options array, take new items and store in localStorage
		}
	}, {
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			this.setState(function () {
				return { options: [] };
			}); //we use parenthesis around brackets for the short hand arrow method, or else the function will assume we are scoping
		}
	}, {
		key: 'handleDeleteOption',
		value: function handleDeleteOption(optionToDelete) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return optionToDelete !== option;
					})
				};
			});
			//changed option argument to optionToDelete to differentiate the variables
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var randomNum = Math.floor(Math.random() * this.state.options.length); //has to be same length as array
			var option = this.state.options[randomNum]; // From options array, we are picking a random index of an item equivalent to a random number generated
			alert(option);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			if (!option) {
				return 'Enter valid value to return item';
			} else if (this.state.options.indexOf(option) > -1) {
				return 'This item already exists';
			}
			this.setState(function (prevState) {
				return {
					options: prevState.options.concat(option)
				};
			});
			//prevState.options.push(option); do not manipulate state manually. deconstruct and concat
		}
	}, {
		key: 'render',
		value: function render() {
			var subtitle = 'Put your life in the hands of a computer';

			return React.createElement(
				'div',
				null,
				React.createElement(Header, { subtitle: subtitle }),
				React.createElement(Action, {
					hasOptions: this.state.options.length > 1,
					handlePick: this.handlePick
				}),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions,
					handleDeleteOption: this.handleDeleteOption
				}),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
	options: []
};

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		React.createElement(
			'h2',
			null,
			props.subtitle && React.createElement(
				'p',
				null,
				props.subtitle
			)
		)
	);
};

Header.defaultProps = {
	title: 'Indecision App'
};

var Action = function Action(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{
				onClick: props.handlePick,
				disabled: !props.hasOptions //true if there are options, so flip it to disable
			},
			'What should I do?'
		)
	);
};

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'Remove All'
		),
		props.options.length === 0 && React.createElement(
			'p',
			null,
			'Please add an option to get started!'
		),
		props.options.map(function (option, index) {
			return React.createElement(Option, {
				key: index,
				optionText: option,
				handleDeleteOption: props.handleDeleteOption
			});
		})
	);
};

var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		props.optionText,
		React.createElement(
			'button',
			{
				onClick: function onClick(e) {
					props.handleDeleteOption(props.optionText);
				}
			},
			'Remove'
		)
	);
};

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		_this2.state = {
			error: undefined
			//initiating error state as undefined, so it can be set later if it comes up
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			//functions in components are declared without const and without the arrow. this 1st handleAddOption is preventing default. it belongs to this component
			e.preventDefault();

			var option = e.target.elements.option.value.trim(); //trim spaces before and after text. also doesn't display empty strings
			var error = this.props.handleAddOption(option);
			//we are passing option to the handleAddOption in the parent component(Indecision). The only return expected is the error, else option was concatenated well.

			this.setState(function () {
				return { error: error };
			});
			//set the undefined error to error ie error: error

			if (!error) {
				e.target.elements.option.value = '';
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				),
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: ['Car', 'tv'] }), document.getElementById('app'));

//NB. stateless functional components make the app faster/more efficient. less overhead as we are not extending React.Component
