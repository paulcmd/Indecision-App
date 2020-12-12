console.log('App.js is running');

const app = {
	title: 'Indecision App',
	subtitle: 'The best app',
	options: [],
};

const onFormSubmit = (e) => {
	e.preventDefault();
	console.log('Form submitted');

	const option = e.target.elements.option.value;
	console.log(option);

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderApp();
	}
};

const deleteAll = () => {
	console.log('Items deleted');
	app.options = [];
	renderApp();
};

const onMakeDecision = () => {
const randomNum = Math.floor(Math.random() * app.options.length) //has to be same length as array
const option = app.options[randomNum];  // From options array, we are picking a random index of an item equivalent to a random number generated
alert(option)
}

const appRoot = document.getElementById('app');

const renderApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>Subtitle: {app.subtitle}</p>}
			<p>
				{app.options.length > 0
					? 'Here are your options'
					: 'There are no options'}
			</p>
			
			<button disabled={app.options.length < 2 } onClick={onMakeDecision}>What should I do?</button>

			<button onClick={deleteAll}>Delete All</button>

			<ol>
				{app.options.map((option, index) => {
					{
						/* index creates unique numbers to id each option in the array */
					}
					return <li key={index}> {option} </li>;
				})}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type='text' name='option' />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

renderApp();

// let count = 0;

// const addOne = () => {
// 	count++;
// 	renderCounterApp()
// };

// const minusOne = () => {
// 	count--;
// 	renderCounterApp()
// };

// const reset = () => {
// 	count = 0;
// 	renderCounterApp()
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>

// 			<button onClick={addOne}>+1</button>

// 			<button onClick={minusOne}>-1</button>

// 			<button onClick={reset}>reset</button>
// 		</div>
// 	);

// 	ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp()

//first arg is what we are rendering in the DOM
//2nd arg is where we are rendering

//const user = {
// 	name: 'Paul',
// 	age: 34,
// 	location: 'Tucson',
// };

// const getLocation = (location) => {
// 	if (location) {
// 		return <p>Location: {location}</p>;
// 	} //else return undefined
// };
// const template2 = (
// 	<div>
// 		<h1>{user.name ? user.name : Anonymous}</h1>
// 		{user.age && user.age >= 18 && <p>Age: {user.age}</p>}
// 		{getLocation(user.location)}
// 	</div>
// );

//app.js changes
/*
babel src/app.js --out-file=public/scripts/app.js --presets=env, react --watch
*/
