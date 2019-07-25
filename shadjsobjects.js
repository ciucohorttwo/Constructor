


/* this function is showing an object and its instances*/
function jerrycan(size, weight,color, type, made){
    this.size = size;
    this.weight =weight;
    this.color=color;
    this.type=type;
    this.made=made;
}
// jerrycan 1,2&3 are the instances of above object
var jerrycan1 =new jerrycan("big", "20kg", "yellow", "20ltrs","Uganda");
var jerrycan2 =new jerrycan("mid", "10kg", "blue", "10ltrs", "Kenya");
var jerrycan3 =new jerrycan("small", "5kg", "white", "5ltrs", "rwanda");

// the 3 for loops are created to iterate in the three created instances 
for (let key in jerrycan1){
    document.write("<p> <b>"+jerrycan1[key]+"</b></p>");
}
for (let key in jerrycan2){
    document.write("<p> <b>"+jerrycan2[key]+"</b></p>");
}

for (let key in jerrycan3){
    document.write("<p> <b>"+jerrycan3[key]+"</b></p>");
}




/* this function is showing an object and its instances*/
function cup(size, weight,color, type, made){
    this.size = size;
    this.weight =weight;
    this.color=color;
    this.type=type;
    this.made=made;
}
// Cup 1,2&3 are the instances of above object
var cup1 =new cup("big", "20kg", "yellow", "20ltrs","clay");
var cup2 =new cup("mid", "10kg", "blue", "10ltrs", "plastic");
var cup3 =new cup("small", "5kg", "white", "5ltrs", "malamine");

// the 3 for loops are created to iterate in the three created instances 
for (let key in jerrycan1){
    document.write("<p> <b>"+cup1[key]+"</b></p>");
}

for (let key in jerrycan2){
    document.write("<p> <b>"+cup2[key]+"</b></p>");
}
for (let key in jerrycan3){
    document.write("<p> <b>"+cup3[key]+"</b></p>");
}






/* this function is showing an object and its instances*/
function restaurant(country, region, city, street,){
   this.country=country;
   this.region=region
   this.city=city;
   this.street=street;
}
// jerrycan 1,2&3 are the instances of above object
var restaurant1 =new restaurant("uganda", "central", "kampala", "firststreet");
var restaurant2 =new restaurant("rwanda", "central", "kigali", "kichukiro");
var restaurant3 =new restaurant("uganda", "east", "mbale", "karoad");

// the 3 for loops are created to iterate in the three created instances 
for (let key in restaurant1){
    document.write("<p> <b>"+restaurant1[key]+"</b></p>");
}

for (let key in restaurant2){
    document.write("<p> <b>"+restaurant2[key]+"</b></p>");
}
for (let key in restaurant3){
    document.write("<p> <b>"+restaurant3[key]+"</b></p>");
}