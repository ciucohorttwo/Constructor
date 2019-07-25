/*  looping properties of object "company"  */
function company(name,location,yearsOfExistance,numberOfWorkers)
{
    this.name=name;
    this.location=location;
    this.yearsOfExistance=yearsOfExistance;
    this.numberOfWorkers=numberOfWorkers;
}
company1=new company("Teltec","Ntinda",10,75);
for(let a in company1){
    document.write("<p><b>"+company1[a]+"</b></p>");
}

 /* function looping the properties of object 'animal'*/
function animal(name,color,age,type,sex){
    this.name=name;
    this.color=color;
    this.age=age;
    this.type=type;
    this.sex=sex;
}
animal1=new animal("Donkey","Grey skin color",28,"Domestic animal","Male");
for(let b in animal1){
    document.write("<p><b>"+animal1[b]+"</b></p>");
}

/*funtion looping the properties of object "bird". */
 function bird(name,breed,sex,kilogram,type){
     this.name=name;
     this.breed=breed;
     this.sex=sex;
     this.kilogram=kilogram;
     this.type=type;

 }
 bird1=new bird("Hen","Exotic breed","Female",5+" kilogram","Domestic");
 for(let c in bird1){
    document.write("<p><b>"+bird1[c]+"</b></p>");
 }

 /*creating a function and looping its properties. 
 like in this object "person".*/

 function person(name,age,Gender,EyeColor,Height){
    
    this.name=name;
     this.age=age;
     this.Gender=Gender;
     this.EyeColor=EyeColor;
     this.Height=Height;
 }
 person1=new person("Daniel",23,"Male","Brown",6+"feet");
 for(let d in house1){
    document.write("<p><b>"+person[d]+"</b></p>");
 }

/*looping the properties of object in the function "lake" */
function lake(name,location,Depth,waterType,lakeType){
    
    this.name=name;
    this.location=loction;
    this.Depth=Depth;
    this.waterType=waterType;
    this.lakeType=lakeType;
}
lake1=new lake("Albert","Hoima",3200+"meters below sea level");
for(let e in lake1){
    document.write("<p><b>"+lake1[e]+"</b></p>");     
}                                                                     
