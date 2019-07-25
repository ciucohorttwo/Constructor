//person object

function person(age,gender,mother,father,status){
    this.age=age,
    this.gender=gender,
    this.mother=mother,
    this.father=father,
    this.status=status

    age_func=function(){
        console.log(this.age)

    },
    gender_func=function(){
        console.log(this.gender)
    }
};

//constructor that initialising objects
var person1= new person(20,'male','mom','mzei','sinlge')

//loop to check print all values of the object
document.write("person properties are:<br>")
for (let i in person1){
    document.writeln(person1[i]+'<br>')
}


// student object

function student(age,gender,regno,school,certified){
    this.age=age,
    this.gender=gender,
    this.regno=regno,
    this.school=school,
    this.certified=certified,
    std_age=function(){
        console.log(this.age)

    },
    regnumber=function(){
        console.log(this.regno)
    }
};
//constructor that initialising objects

var student1= new student(20,'male','123xx','CIU','YES')

document.write("student properties are:<br>")
//loop to check print all values of the object
for (let i in student1){
    document.writeln(student1[i]+'<br>')
}



//department object

function department(name,regsitered,school,numofstds,staff){
    this.name=name,
    this.regsitered=regsitered,
    this.school=school,
    this.numofstds=numofstds,
    this.staff=staff,
    deptname=function(){
        console.log(this.name)

    },
    deptreg=function(){
        console.log(this.regsitered)
    }
};

//constructor that initialising objects
var department1= new department('IT','yes','infotech',23432,200)
document.write("department properties are:<br>")

//loop to check print all values of the object
for (let i in department1){
    document.writeln(department1[i]+'<br>')
}



//child object

function child(age,gender,mother,father,size){
    this.age=age,
    this.gender=gender,
    this.mother=mother,
    this.father=father,
    this.size=size,
    child_age=function(){
        console.log(this.age)

    },
    gend=function(){
        console.log(this.gender)
    }
};
//constructor that initialising objects
var child1= new child(20,'male','mimi','dada','20kg')

document.write("child properties are:<br>")
//loop to check print all values of the object
for (let i in child1){
    document.writeln(child1[i]+'<br>')
}

//bar object

function bar(name,drinks,avg_no_people,partners,location){
    this.name=name,
    this.drinks=drinks,
    this.avg_no_people=avg_no_people,
    this. partners=partners,
    this.location=location,



    name_bar=function(){
        console.log(this.name)

    },
    numofdrinks=function(){
        console.log(this.drinks)
    }
}

//constructor that initialising objects
var bar1= new bar('H20',232,1000,4,'acacia avenue')


document.write("bar properties are:<br>")

//loop to check print all values of the object
for (let i in bar1){
    document.writeln(bar1[i]+'<br>')
}



