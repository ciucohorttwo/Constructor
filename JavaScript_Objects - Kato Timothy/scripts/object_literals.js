/*Program creates laptop 3 object literals with 7 properties and one method*/


//msi laptop 
var msi = {
	type: "Gaming",
	model: "MSI GE622QF",
	cpu: "1.8GHz 5th generation Intel core i7",
	graphics: "NVDIA GeForce GTX 970M",
	ram: "16GB",
	display: "15.4-inch Full HD 1920p",
	storage: "1TB",
	describeLaptop: function () {
		console.log("The " + this.model + " is a " + this.type + " laptop that has a " + this.cpu + " processor " + " and includes a " + this.graphics + " graphics card " + "with " + this.ram + " RAM  and a " + this.screen + " display" + " and includes a " + this.storage + " hard drive.");
	}
}

//dell inspiron laptop
var dell = {
	type: "Gaming",
	model: "ASUS G750JH",
	cpu: "2.4GHz Intel Core i7 4th generation Haswel",
	graphics: "NVIDIA GeForce GTX 780",
	ram: "24GB",
	display: "15-inch Full HD 1920p",
	storage: "1TB",
	describeLaptop: function () {
		console.log("The " + this.model + " is a " + this.type + " laptop that has a " + this.cpu + " processor " + " and includes a " + this.graphics + " graphics card " + "with " + this.ram + " RAM  and a " + this.screen + " display" + " and includes a " + this.storage + " hard drive.");
	}

}


//hp zbook laptop
var hp = {
	type: "Gaming",
	model: "HP ZBOOK F2Q8UT",
	cpu: "2.7GHz Intel core i7",
	graphics: "NVDIA Quadro K4100M",
	ram: "32GB",
	display: "17.3-inch Full HD 1080p",
	storage: "512GB",
	describeLaptop: function () {
		console.log("The " + this.model + " is a " + this.type + " laptop that has a " + this.cpu + " processor " + " and includes a " + this.graphics + " graphics card " + "with " + this.ram + " RAM  and a " + this.screen + " display" + " and includes a " + this.storage + " hard drive.");
	}

}

msi.describeLaptop();
