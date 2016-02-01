// PART 1

// FOODITEM

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

// PART 2

// FOOD ITEMS

var vodka = new FoodItem (
	"Milagros Vodka",
	100,
	true,
	true,
	true
	)
var tomatoJuice = new FoodItem (
	"Tomato Juice",
	50,
	true,
	true,
	true
	)
var celery = new FoodItem (
	"Celery Stick",
	10,
	true,
	true,
	true
	)

//DRINKS

var Drink = function(name, description, price, ingredients){
	this.name 	= name,
	this.description	= description,
	this.price			= price,
	this.ingredients	= ingredients
}

Drink.prototype.stringify = function(){
	return "Try our " + this.name + ". " + this.description
}

var blodyMarry = new Drink(
	"Blody Marry",
	"An amazingly delicious coctail!",
	7,
	[vodka, tomatoJuice, celery]
	)
console.log(blodyMarry)

// PLATES

var Plate = function(name, description, price, ingredients){
	this.name 	= name,
	this.description	= description,
	this.price			= price,
	this.ingredients	= ingredients
}

Plate.prototype.stringify = function(){
	return this.name + ". " + this.description
}

var euroPlate = new Plate("Euro Plate", "A delicious blend of European classics.", 100, [Gulyas, Sermale])
var romanianPlate = new Plate("Romanian Plate", "A delicious blend of European classics.", 100, [Gulyas, Sermale])

// ORDER

var Order = function(platesArray) {
	this.plates = platesArray
}

Order.prototype.stringify = function(){
	var plates = []
	this.plates.map( function(plateItem) {
		plates.push(plateItem.name)
	})
	return plates.join(", ")
}

var zoeOrder = new Order([euroPlate, romanianPlate])

// MENU 

var Menu = function(platesArray) {
	this.plates = platesArray
}

var tuesdayMenu = new Menu([euroPlate, romanianPlate]);

Menu.prototype.stringify = function(){
	var plateNames = []
	var plateDescriptions = []
	var platePrices = []
	var menuArray = []
	this.plates.map( function(plateItem){
		plateNames.push(plateItem.name)
		plateDescriptions.push(plateItem.description)
		platePrices.push(plateItem.price)
	})
	for(var i=0; i<plateNames.length; i++){
		menuArray.push(plateNames[i] + ', ' + plateDescriptions[i] + ', $' + platePrices[i]);
	}
	return menuArray.join("\n")
}

// RESTAURANT

var Restaurant = function(name, description, menu) {
	this.name		= name,
	this.description = description,
	this.menu 	= menu
}

Restaurant.prototype.stringify = function(){
	return this.name + "\n" + this.description + "\n" + this.menu 
}

var zoesRestaurant = new Restaurant('Little Hungary', 'Traditional Homemade Food', tuesdayMenu.stringify());

// CUSTOMER

var Customer = function(dietaryPreferences) {
	this.dietaryPreferences = dietaryPreferences
}

Customer.prototype.stringify = function(){
		return "Customer is gluten free : " + this.dietaryPreferences.glutenFree + ", citrusFree :" + this.dietaryPreferences.citrusFree + ", vegan:" + this.dietaryPreferences.vegan;
}

var valentin = new Customer({glutenFree : false, citrusFree : false, vegan : false})











