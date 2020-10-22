class Person {
	constructor(name = 'Anonymous', age = 0, gender) {
		//name = 'Anonymous' is a default value if one is not provided
		this.name = name;
		this.age = age;
		this.gender = gender;
	}

	getGreeting() {
		return `Hi, my name is ${this.name}! `;
	}

	getDescription() {
		return `${this.name} is ${this.age} years old. `;
	}

	getGender() {
		if (this.gender === 'male') {
			return 'His';
		}
		return 'Her';
	}
}

class Student extends Person {
	constructor(name, age, gender, major) {
		super(name, age, gender);
		this.major = major;
	}

	hasMajor() {
		return !!this.major;
		//! - returns a flipped boolean
		//!! - returns 2 flipped booleans(ie the original bool)
		//i.e if true, the return value will be true
	}

	getDescription() {
		let description = super.getDescription();
		let gender = super.getGender();
		if (this.hasMajor()) {
			description += `${gender} major is ${this.major}`;
		}

		return description;
	}
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting+= `I am travelling from ${this.homeLocation}`
        }
        return greeting
    }
}

const me = new Traveler('Paul Muchoki', 34, 'Kenya');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
