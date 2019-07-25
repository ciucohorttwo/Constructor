/*Assignment two
Create five objects with parameters and use constructors to initialise the instantiated objects.
Use a for loop to display the values of the instatiated object */

//object baby with parameters
function baby(name, skinColor, age, weight)
{
    this.name=name;
    this.skinColor=skinColor;
    this.age=age;
    this.weight=weight;
}
//constuctor that initialises the instantiated object baby1
var baby1= new baby("Eve", "brown", 3, "30kg");
document.write("<h4>These are the properties of "+ baby1.name +" </h4> <br />");

//for loop looping the properties of the instantiated object baby1
for (let key in baby1)
{
    //displaying the values of baby1 
    document.write(baby1[key]+"<br />")
}

//object bicycle with parameters
function bicycle(type, numberOfWheels, brakes, gears)
{
    this.type=type;
    this.numberOfWheels=numberOfWheels;
    this.brakes=brakes;
    this.gears=gears;
}
//constuctor that initialises the instantiated object bicycle1
var bicycle1= new bicycle("Sports bicycle", 2, 2, 6);
document.write("<h4>These are the properties of a "+ bicycle1.type +"</h4><br />");

//for loop looping the properties of the instantiated object bicycle1
for (let key in bicycle1)
{
    //displaying the values of bicycle1 
    document.write(bicycle1[key]+"<br />")
}

//object eagle with parameters
function eagle(name, length, color, weight, location)
{
    this.name=name;
    this.length=length;
    this.color=color;
    this.weight=weight;
    this.location=location;
}
//constuctor that initialises the instantiated object eagle1
var eagle1= new eagle("Gurney's eagle", "30cm", "dark brown", "3.06kg", "Australia");
document.write("<h4>These are the properties of a "+ eagle1.name +"</h4><br />");

//for loop looping the properties of the instantiated object eagle1
for (let key in eagle1)
{
    //displaying the values of eagle1 
    document.write(eagle1[key]+"<br />")
}

//object soccerTeam with parameters
function soccerTeam(name, players, coach, sponsor)
{
    this.name=name;
    this.players=players;
    this.coach=coach;
    this.sponsor=sponsor;
}
//constuctor that initialises the instantiated object soccerTeam1
var soccerTeam1= new soccerTeam("Barcelona", 15, 3, 1);
document.write("<h4>These are the properties of "+ soccerTeam1.name +"</h4><br />");

//for loop looping the properties of the instantiated object soccerTeam1
for (let key in soccerTeam1)
{
    //displaying the values of soccerTeam1 
    document.write(soccerTeam1[key]+"<br />")
}

//object car with parameters
function car(model,brand, type, price)
{
    this.model=model;
    this.brand=brand;
    this.type=type;
    this.price=price;
}
//constuctor that initialises the instantiated object car1
var car1= new car("Toyota", "Vitz", "saloon", "5 million shillings");
document.write("<h4>These are the properties of a "+ car1.brand +"</h4><br />");

//for loop looping the properties of the instantiated object car1
for (let key in car1)
{
    //displaying the values of car1 
    document.write(car1[key]+"<br />")
}
