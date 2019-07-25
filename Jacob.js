/* This projects creates objects using the constructors 
and for ..in loop to print out the keys in the instances

*/


// Constructor for dog class
function dog(name, age, breed,spots,colour){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.spots = spots;
    this.colour = colour
};
// creation of dog1 from a "dog" object
var dog1 = new dog("baros", 2 , "germanSheperd","noSpots", "white");

// creation of dog2 from a "dog" object
var dog2 = new dog("fighter", 3 , "Alsatian", "spotted", "blue");

// creation of dog3 from a "dog" object
var dog3 = new dog("pentil", 4, "lab", "nospots", "brown");

// for loop to iterate through the instance of dog1
for (key in dog1){
    console.log(dog1[key])
};

//constructor for an aeroplane class
function aeroplane(name, model, yearOfManufacture,passengerCapacity, colour ){
    this.name = name;
    this.model= model;
    this.yearOfManufacture = yearOfManufacture;
    this.passengerCapacity = passengerCapacity;
    this.colour = colour;
};
// creation of aeroplane1 from an "aeroplane" object
var aeroplane1 = new aeroplane("Boeing", 737, 2000, 300, "grey");

// creation of aeroplane2 from an "aeroplane" object
var aeroplane2 = new aeroplane("Cessna", 172, 2006, 12, "blue");

// creation of aeroplane3 from an "aeroplane" object
var aeroplane3 = new aeroplane("BombardierCRJ", 900, 2017,110, "yellow")

// for loop to iterate through the instance of aeroplane2
for(key in aeroplane2){
    console.log(aeroplane2[key]);
}

//constructor of a soldier class
function soldier (name, age, countryOfOrigin, gender,salary){
    this.name = name;
    this.age = age;
    this.countryOfOrigin = countryOfOrigin;
    this.gender = gender;
    this.salary = salary;
}

// creation of soldier1 from an "soldier" object
var soldier1 = new soldier("Jacob", 32, "Uganda", "Male", "$2,000");

// creation of soldier2 from a "soldier" object
var soldier2 = new soldier("Samson", 27, "Eritrea", "Male", "$3,000");

// creation of soldier3 from a "soldier" object
var soldier3 = new soldier("John", 33, "kenya", "Male", "$1,000");

//for loop to iterate through the instance of soldier
for(key in soldier1){
    console.log(soldier1[key]);
};

//constructor of a farmer class
function farmer (name, age, countryOfOrigin, gender,farmType){
    this.name = name;
    this.age = age;
    this.countryOfOrigin = countryOfOrigin;
    this.gender = gender;
    this.farmType = farmType;
};

// creation of farmer1 from a "farmer" object
var farmer1 = new farmer("Jacob", 32, "Uganda", "Male", "camels");

// creation of farmer2 from a "farmer" object
var farmer2 = new farmer("Samson", 27, "Eritrea", "Male", "Chicken");

// creation of farmer3 from a "farmer3" object
var farmer3 = new farmer("John", 33, "kenya", "Male", "cows");

//for loop to iterate through the instance of farmer3
for(key in farmer3){
    console.log(farmer3[key]);
};

//constuctor for parliamenterian class
function parliamentarian (name, age, country, gender,salary){
    this.name = name;
    this.age = age;
    this.country = country;
    this.gender = gender;
    this.salary = salary;
};
// creation of parliamentarian1 from an "parliamentarian" object
var parliamentarian1 = new parliamentarian("Jacob", 32, "Uganda", "Male", "$2,000");

 //creation of parliamentarian2 from an "parliamentarian" object
var parliamentarian2 = new parliamentarian("Samson", 27, "Eritrea", "Male", "$2,000");

// creation of parliamentarian from an "parliamentarian" object
var parliamentarian3 = new parliamentarian("John", 33, "kenya", "Male", "$2,000");


//for loop to iterate through thr instance of parliamentarian
for(key in parliamentarian3){
    console.log(parliamentarian3[key]);
};

