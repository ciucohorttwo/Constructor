/*This program constructs a 'Laptop' Object and instantiates 3 objects from it. The Object consists of 5 properties, 
and includes one property and one method shared among all its instances.
*/

//laptop Object constructor
function Laptop(model, cpu, graphics, ram, display, storage) {
	this.Model = model;
	this.CPU = cpu;
	this.Graphics = graphics;
	this.RAM = ram;
	this.Display = display;
	this.Storage = storage;
}

//property shared among all instances of Laptop Object
Laptop.prototype.Type = "Gaming";

//method shared among all instances of the Laptop Object

//describes the Laptop object
Laptop.prototype.describeComputer = function () {
	console.log("The " + this.Model + " is a " + this.Type + " laptop that has a " + this.CPU + " processor " + " and includes a " + this.Graphics + " graphics card " + "with " + this.RAM + " RAM  and a " + this.Display + " display" + " and includes a " + this.Storage + " hard drive.");
}

// Instances of the Laptop Object

//msi Ge622qf 
var msi = new Laptop(
	"MSI GE622QF",
	"1.8GHz 5th generation Intel core i7",
	"NVDIA GeForce GTX 970M",
	"16GB",
	"15.4-inch Full HD 1920p",
	"1TB");

//dell inspiron  
var dell = new Laptop(
	"ASUS G750JH",
	"2.4GHz Intel Core i7 4th generation Haswel",
	"NVIDIA GeForce GTX 780",
	"24GB",
	"15-inch Full HD 1920p",
	"1TB");

//hp zbook instance

var hp = new Laptop(
	"HP ZBOOK F2Q8UT",
	"2.7GHz Intel core i7",
	"NVDIA Quadro K4100M",
	"32GB",
	"17.3-inch Full HD 1080p",
	"512GB");

dell.describeComputer();
msi.describeComputer();
hp.describeComputer();
