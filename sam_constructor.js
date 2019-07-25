
/* defining objects with parameters */

function book(title,author,publishedDate,genre, publisher){
    this.title = title;
    this.author = author;
    this.publishedDate = publishedDate;
    this.genre = genre
    this.publisher = publisher
}
// instantiating an object with a constructor 
var book1 = new book("Chronicles of Narnia","C.S. Lewis",1950,"Fantasy","Penguin Classics");
var book2 = new book("Dunk and Egg","George R.R Martin",1996,"Fiction","Stevenson");
var book3 = new book("Chronicles of Narnia","C.S. Lewis",1950,"Fantasy","Penguin Classics");
// loop that iterates through the properties passed to object
for (let i in book1){
    console.log("Book: "+book1[i]);
}

/* defining objects with parameters */
function weather(intensity,humidity,pressure,hurricane,thunderstorm) {
    this.intensity = intensity;
    this.humidity = humidity;
    this.pressure = pressure;
    this.hurricane = hurricane;
    this.thunderstorm = thunderstorm; 
}
// instantiating an object with a constructor 
var weather1 = new weather("Very high","low humidity","high pressure","on the rise","thunder");
var weather2 = new weather("very low","high humidity","low pressure","on the rise","thunder");
var weather3 = new weather("Chronicles of Narnia","C.S. Lewis",1950,"Fantasy","Penguin Classics");

// loop that iterates through the properties passed to object book
for (let i in weather1){
    // print out value to the console
    console.log(weather1[i]);
}

/* defining objects with parameters */
function fish(name,type,gender,age,weight){
  this.name = name;
  this.type = type;
  this.gender = gender;
  this.age = age;
  this.weight = weight;  
}
// instantiating an object with a constructor 
let fish1 = new fish("Willy","Dolphin","Male",5,50)
let fish2 = new fish("Nemo","Blue Whale","Male",3,300)
let fish3 = new fish("Dorry","Shark","Female",10,90)
// loop that iterates through the properties passed to object
for (let i in fish1){
  console.log(fish1[i])
}

/* defining objects with parameters */
function taxi(name,color,numberPlate,seats,engineType){
  this.name = name; 
  this.color = color;
  this.numberPlate = numberPlate;
  this.seats = seats;
  this.engineType = engineType;
}
// instantiating an object with a constructor 
let taxi1 = new taxi("toyota","yellow","UAJ45J",4, "VX5")
let taxi2 = new taxi("mazda","oange","URT67I",8, "VR5")
let taxi3 = new taxi("tata","blue","UET5H",3, "V1G")
// loop that iterates through the properties passed to object
for(let i in taxi1){
  console.log(taxi1[i])
}

/* defining objects with parameters */
function courseUnits(year,semester,duration,type,difficulty){
    this.year = year; 
    this.semester = semester;
    this.duration = duration;
    this.type = type;
    this.difficulty = difficulty;
}
// instantiating an object with a constructor 
let courseUnits1 = new courseUnits(2019,4,"4 months","Accelerated","Easy")
let courseUnits2 = new courseUnits(2018,3,"5 months","Extensive","Medium")
let courseUnits3 = new courseUnits(2017,1,"6 months","Accelerated","Hard")
// loop that iterates through the properties passed to object
for(let i in courseUnits1){
    console.log(courseUnits1[i])
}
