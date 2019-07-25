// ===========================================================================================================================================
// SABBITI ISAAC PASCHAL's work.
// ============================================================================================================================================

//An assignment making 5 functions that have "for" loops
// Using key words "this" and "let key in"


// 1.

// the level of abstraction is amped to cities in this function

function city (name, size, hills, roads, popularity) {	

//this function has 5 properties

	this.name = name;
	this.size = size;
	this.hills = hills;
	this.roads = roads;
	this popularity = popularity;

	
};

// we use "new" to initialise an instantiated object

var city1 = new city ("kampala","tiny", "5", "dirty", "high" );


var city2 = new city ("Canberra","big", "10", "clean", "extreme" );


var city3 = new city ("Nairobi","bigger than kampala", "7", "dirty", "very high" );

// a for_loop that iterates through the contents of city1

for (let key in city1){

// it prints to the console

console.log (city1[key]);

}


// =========================================================================================================================================

// 2.

// the level of abstraction is amped to vehicles in this function


function vehicle (name, color, numberPlate, type, tyreSize) {

//this function has 5 properties

	this.name = name;
	this.color = color;
	this.numberPlate = numberPlate;
	this. type = type;
	this.tyreSize = tyreSize;

	
};

// we use "new" to initialise an instantiated object

var vehicle1 = new vehicle ("MB cls 2019","blue", "UBG203E", "sedan", "small" );


var vehicle2 = new vehicle ("toyota fortuner","white", "UBG123P", "SUV", "medium" );


var vehicle3 = new vehicle ("volkwagen touareg","grey", "UBS374W", "SUV", "medium" );

// a for_loop that iterates through the contents of vehicle1

for (let key in vehicle1){
	
// it prints to the console
	
console.log (vehicle1[key]);

}






// ======================================================================================================================================

// 3.

// the level of abstraction is amped to phones in this function

function phone (brand, color, price, origin, sleekness) {

//this function has 5 properties

	this.brand = brand;
	this.color = color;
	this.price = price;
	this.origin = origin;
	this.sleekness = sleekness;

	
};

// we use "new" to initialise an instantiated object

var phone1 = new phone ("samsung","white", "$500", "South Korea", "high" );


var phone2 = new phone ("Iphone","matte black", "$1000", "USA", "high" );


var phone3 = new phone ("Tecno","golden", "$300", "China", "high" );

// a for_loop that iterates through the contents of phone1

for ( let key in phone1){
	
// it prints to the console
	
console.log (phone1[key]);

}


// =========================================================================================================================================

// 4.

// the level of abstraction is amped to Ex'es in this function

function Ex (name, weeksWith, skinColor, Job) {

//this function has 4 parameters
	this.name = name
        this.weeksWith = weeksWith;
	this.skinColor = skinColor;
	this.Job = Job;
	this.tribe = tribe;

	
};

// we use "new" to initialise an instantiated object

var Ex1 = new Ex ("samantha","4", "chocolate", "Accountant" , "mukiga");


var Ex2 = new Ex ("Shaniqua","47", "brown", "airHostess" ,"muganda");


var Ex3 = new Ex ("Sandra","8", "white", "Author", "jophadhola" );

// a for_loop that iterates through the contents of Ex1

for (let key in Ex1){

// it prints to the console	
	
console.log (Ex1[key]);

}


// ==================================================================================================================================================

// 5.

// the level of abstraction is amped to chairs in this function


function chair (color, type, material, weight) {

//this function has 4 parameters

	this.color = color;
	this.type = type;
	this.material = material;
	this.weight = weight;
	this.location = location;

	
};

// we use "new" to initialise an instantiated object

var chair1 = new chair ("blue","4-legged", "wooden", "heavy", "sittingroom" );


var chair2 = new chair ("red","sofa", "wooden", "heavy", "dining" );


var chair3 = new chair ("white","3-legged", "wooden", "light", "bedroom" );

// a for_loop that iterates through the contents of chair1

for (let key in chair1){
	
// it prints to the console
	
console.log (chair1[key]);

}


// ==========================================================================================================================================================
