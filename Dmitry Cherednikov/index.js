// Menu

function Menu(name) {
	this.name = name;
}

Menu.prototype.getCalories = function() {
	return this.calories;
}

Menu.prototype.getPrice = function() {
	return this.price;
}

// Hamburger

function Hamburger(size, stuffing) {
	var name = 'Hamburger';
	Menu.call(this, name);

	this.size = size.name;
	this.stuffing = stuffing.name;
	this.price = stuffing.price + size.price;
	this.calories = stuffing.calories + size.calories;
}

Hamburger.SIZE_SMALL = {
	'name': 'small',
	'price': 50,
	'calories': 20,
}

Hamburger.SIZE_LARGE = {
	'name': 'large',
	'price': 100,
	'calories': 40,
}

Hamburger.STUFFING_CHEESE = {
	'name': 'cheese',
	'price': 10,
	'calories': 20,

}

Hamburger.STUFFING_SALAD = {
	'name': 'salad',
	'price': 20,
	'calories': 5,
}

Hamburger.STUFFING_POTATO = {
	'name': 'potato',
	'price': 15,
	'calories': 10,
}

Hamburger.prototype = Object.create(Menu.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.prototype.getStuffing = function() {
	return this.stuffing;
}

Hamburger.prototype.getSize = function() {
	return this.size;
}

// Salad

function Salad(type, amount) {
	var standart_amount = 100;
	Menu.call(this, type.name);

	this.amount = amount;
	this.price = type.price / standart_amount * amount;
	this.calories = type.calories / standart_amount * amount;
}

Salad.CAESAR = {
	'name': 'Caesar',
	'price': 100,
	'calories': 20,
}

Salad.OLIVIER = {
	'name': 'Olivier',
	'price': 50,
	'calories': 80,
}

Salad.prototype = Object.create(Menu.prototype);
Salad.prototype.constructor = Salad;

// Drink

function Drink(type) {
	Menu.call(this, type.name);

	this.price = type.price;
	this.calories = type.calories;
}

Drink.COKE = {
	'name': 'Coke',
	'price': 50,
	'calories': 40,
}

Drink.COFFEE = {
	'name': 'Coffee',
	'price': 80,
	'calories': 20,
}

Drink.prototype = Object.create(Menu.prototype);
Drink.prototype.constructor = Drink;

// Breakfast

function Breakfast() {
	var name = 'Breakfast';
	Menu.call(this, name);
	
	this.hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
	this.drink = new Drink(Drink.COFFEE);

	this.price = this.hamburger.price + this.drink.price;
	this.calories = this.hamburger.price + this.drink.calories;
}

Breakfast.prototype = Object.create(Menu.prototype);
Breakfast.prototype.constructor = Breakfast;

Breakfast.prototype.getDrink = function() {
	return this.drink;
}

Breakfast.prototype.getHamburger = function() {
	return this.hamburger;
}

// Order

function Order() {
	this.list = [];
	this.isOpen = true;
	this.price = 0;
	this.calories = 0;
}

Order.prototype.add = function(item) {
	if (this.isOpen && item instanceof Menu && this.list.indexOf(item) == -1) {
		this.list.push(item);
		this.price += item.price;
		this.calories += item.calories;
	}
}

Order.prototype.remove = function(item) {
	var position = this.list.indexOf(item)
	if (this.isOpen && position !== -1) {
		this.list.splice(position, 1);
		this.price -= item.price;
		this.calories -= item.calories;
	}
}

Order.prototype.getPrice = function() {
	return this.price;
}

Order.prototype.getCalories = function() {
	return this.calories;
}

Order.prototype.showOrder = function() {
	return this.list;
}

Order.prototype.checkout = function() {
	this.isOpen = false; // or Object.freeze
}
