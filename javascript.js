var FoodItem = function(name, calories, vegan, glutenFree, citrusFree ){
	this.name = name,
	this.calories = calories,
	this.vegan = vegan,
	this.glutenFree = glutenFree,
	this.citrusFree = citrusFree
};

var Gulyas = new FoodItem (
	'Gulyas Soup',
	500,
	false,
	true,
	true
	);

console.log(Gulyas);

FoodItem.prototype.stringify = function (){
	return 'Our delicious ' + this.name + ' has only ' + this.calories + '. Diatery information: gluten free: ' + this.glutenFree + ', citrus free: ' + this.citrusFree + ', vegan: ' + this.vegan + '.'
};

var Sermale = new FoodItem (
	'Sermale Cabbage Rolls',
	1000,
	false,
	true,
	true
	);

var Hamburger = new FoodItem (
	'Cheeseburger',
	1200,
	false,
	false,
	true
	);

console.log(Sermale);
console.log(Hamburger);


