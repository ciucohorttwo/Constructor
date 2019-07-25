// ==========================================================================================================
// SABBITI ISAAC PASCHAL's work.
// ============================================================================================================

//An assignment making 5 functions that have for loops



// 1.

// the level of abstraction is amped to cities in this function

function city (name, size, hills, roads) {	

//this function has 4 parameters

	this.name = name;
	this.size = size;
	this.hills = hills;
	this.roads = roads;

	
};

// we use "new" to initialise an instantiated object

var city1 = new city ("kampala","tiny", "5", "dirty" );


var city2 = new city ("Canberra","big", "10", "clean" );


var city3 = new city ("Nairobi","bigger than kampala", "7", "dirty" );

// a for_loop that iterates through the contents of city1

for (key in city1){

// it prints to the console

console.log (city1[key]);

}


// ===========================================================================================================

// 2.

// the level of abstraction is amped to vehicles in this function


function vehicle (name, color, numberPlate, type) {

//this function has 4 parameters

	this.name = name;
	this.color = color;
	this.numberPlate = numberPlate;
	this. type = type;

	
};

// we use "new" to initialise an instantiated object

var vehicle1 = new vehicle ("MB cls 2019","blue", "UBG203E", "sedan" );


var vehicle2 = new vehicle ("toyota fortuner","white", "UBG123P", "SUV" );


var vehicle3 = new vehicle ("volkwagen touareg","grey", "UBS374W", "SUV" );

// a for_loop that iterates through the contents of vehicle1

for (key in vehicle1){

console.log (vehicle1[key]);

}






// ======================================================================================================================================

// 3.

// the level of abstraction is amped to phones in this function

function phone (brand, color, price, origin) {

//this function has 4 parameters

	this.brand = brand;
	this.color = color;
	this.price = price;
	this.origin = origin;

	
};

// we use "new" to initialise an instantiated object

var phone1 = new phone ("samsung","white", "$500", "South Korea" );


var phone2 = new phone ("Iphone","matte black", "$1000", "USA" );


var phone3 = new phone ("Tecno","golden", "$300", "China" );

// a for_loop that iterates through the contents of phone1

for (key in phone1){

console.log (phone1[key]);

}


// =========================================================================================================================================

// 4.

// the level of abstraction is amped to Ex'es in this function

function Ex (name, weeksWith, skinColor, Job) {

//this function has 4 parameters

	this.weeksWith = weeksWith;
	this.skinColor = skinColor;
	this.Job = Job;

	
};

// we use "new" to initialise an instantiated object

var Ex1 = new Ex ("samantha","4", "chocolate", "Accountant" );


var Ex2 = new Ex ("Shaniqua","47", "brown", "airHostess" );


var Ex3 = new Ex ("Sandra","8", "white", "Author" );

// a for_loop that iterates through the contents of Ex1

for (key in Ex1){

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

	
};

// we use "new" to initialise an instantiated object

var chair1 = new chair ("blue","4-legged", "wooden", "heavy" );


var chair2 = new chair ("red","sofa", "wooden", "heavy" );


var chair3 = new chair ("white","3-legged", "wooden", "light" );

// a for_loop that iterates through the contents of chair1

for (key in chair1){

console.log (chair1[key]);

}


// ==========================================================================================================================================================