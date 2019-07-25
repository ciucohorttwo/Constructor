// The five functions and their three ways and thier objects as well.
// This is my first function with it's object.


functionhouse(door, window,ventiletor, location, type){
    this.door =door;
    this.window = window;
    this.ventiletor = ventiletor;
    this.location = location;
    this.type = type;
}
// creation of house1 from object house.
var house1 = new house("woooden","glass",8,"kiteezi","bangerlow");
// Creation of house2 from object house.
var house2 = new house("fibre","wood","6","gayaza","hut");
// Creation of house3 from object house
var house3 = new house("glass","glass",4,"bunga","flat");
for(key in house2){
    document.write(house2[key]);
}


// This is my second function with it's object.
functioncow(color, type, feed, weight, dob){
this.color = color;
this.type = type;
this.feed = feed;
this.weight = weight;
this.dob = dob;
}
//Creation of cow1 from object cow
var cow1 =new cow("dotted","persian","grass","200kg",2014);
// Creation of cow2 from object cow
var cow2 =new cow("black","fresian","maize brand","300kg",2003);
// Creation of cow3 from object cow
var cow3 =newcow("brown","local breed","elephant grass","150kg",2018);
for(key in cow2){
    document.write(cow2[key]);
}

// This is my third function with it's object
 functionfruit(type, color, seed,soil, tree){
     this.type = type;
     this.color =color;
     this.seed = seed;
     this.soil = soil;
     this.tree =tree;
 }
// Creation of fruiti from object fruit
var friut1 =newfruit("apple","green","black","loam","apple tree");
// Creation of friut2 from object fruit
var fruit2 =newfruit("orange","orange","silver","clay","orange tree");
//Creation of friut3 from object fruit
var friut3 =newfriut("mango","yellow","brown","sand","mango tree")
for(key in fruit2){
    document.write(fruit2[key]);
} 

// This is my last function with it's object
functionphone(name, type, dom, country, size){
    this.name =name;
    this.type =type;
    this.dom =dom;
    this.country =country;
    this.size =size;
}
// Creation of phone1 from object phone
var phone1 =("samsung","j2",2016,"china",56);
//Creation of phone2 from object phone
var phone2 =("tecno","camon",2018,"german",46);
//Creation of phone3 from object phone
var phone3 =("iphone","apple",2019,"uk",28);
for(key in phone2){
    document.write(phone2[key]);