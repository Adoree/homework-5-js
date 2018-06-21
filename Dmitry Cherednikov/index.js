function Menu() {
	this.name = name;
}

// Hamburger

function Hamburger(size, stuffing) {
	this.name = 'Hamburger';
	this.size = size;
	this.stuffing = stuffing;
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

Hamburger.prototype = new Menu();

Hamburger.prototype.getStuffing = function() {
	return this.stuffing;
}

Hamburger.prototype.getSize = function() {
	return this.size;
}

Hamburger.prototype.getPrice = function() {
	return this.stuffing.price + this.size.price;
}

Hamburger.prototype.getCalories = function() {
	return this.stuffing.calories + this.size.calories;
}

// Salad

function Salad(type, gr) {
	Menu.call(this);
	this.name = type.name;
	this.amount = gr;
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

Salad.prototype = new Menu();

Salad.prototype.getPrice = function() {
	var caesar_price = 100 / 100;
	var olivier_price = 50 / 100;

	if (this.name === 'Caesar') {
		return this.amount * caesar_price;
	}

	if (this.name === 'Olivier') {
		return this.amount * olivier_price;
	}
}

Salad.prototype.getCalories = function() {
	var caesar_calories = 20 / 100;
	var olivier_calories = 80 / 100;

	if (this.name === 'Caesar') {
		return this.amount * caesar_calories;
	}

	if (this.name === 'Olivier') {
		return this.amount * olivier_calories;
	}
}

// Drink

function Drink(type) {
	Menu.call(this);
	this.name = type.name;
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

Drink.prototype.getPrice = function() {
	return this.price;
}

Drink.prototype.getCalories = function() {
	return this.calories;
}

// Order

function Order() {
	this.list = [];
	this.isOpen = true;
	this.price = 0;
	this.calories = 0;
}

Order.prototype.add = function(item) {
	if (this.isOpen && item instanceof Menu) {
		this.list.push(item);
		this.price += item.getPrice();
		this.calories += item.getCalories();
	}
}

Order.prototype.remove = function(item) {
	var position = this.list.indexOf(item)
	if (this.isOpen && position !== -1) {
		this.list.splice(position, 1);
		this.price -= item.getPrice();
		this.calories -= item.getCalories();
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
	this.isOpen = false;
}
