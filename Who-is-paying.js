let names = [];
let order = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh"];

for(let i = 0; i < 7; i++) {
    let name = prompt("Who's paying today? Please, write the " + order[i] + " name on your friends group!");
    names.push(name);
}

alert("Please, check it out! The names are: " + names + "!");

function whosPaying(names) {
	var numberOfPeople = names.length;
	var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
	var randomPerson = names[randomPersonPosition];

	return randomPerson + " is going to pay today!";
}

alert(whosPaying(names));
