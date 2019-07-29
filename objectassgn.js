/*declaring object employee and assigning properties to it*/
function employee(name, dob, department, nationality, status)
{
    this.name=name;
    this.dob=dob;
    this.department=department;
    this.nationality=nationality;
    this.status=status;
}

//initiating three objects with constructors
let employee1 = new employee("Nicole", "24-04-97", "Tax", "Ugandan", "Single");
let employee2 = new employee("Kenzo", "23-09-89", "Legal", "Kenyan", "Married");
let employee3 = new employee("John", "25-08-90", "Legal", "Indian", "Single");

//creating a loop to print out the properties of employee1
document.write("This employee is: ");
for (let key in employee1)
{
    document.write(" <br>" + employee1[key]);
}
document.write(" <br> This employee is: ");

//creating a loop to print out the properties of employee2
for(let key in employee2)
 {
    
     document.write("<br>" + employee2[key]);
 }
 document.write(" <br> This employee is: ");

 //creating a loop to print out the properties of employee3
for(let key in employee3)
{
    
     document.write("<br> " + employee3[key]);
 }


/*declaring object citizen and assigning properties to it*/
function citizen(name, tribe, clan, residence)
 {
     this.name=name;
     this.tribe=tribe;
     this.clan=clan;
     this.residence=residence;
 }
  //initiating three objects with constructors
 let citizen1= new citizen("Jane", "Mutoro", "Mubiito", "Makerere");
 let citizen2 = new citizen("Betty", "Munyankole", "Benekahaya", "Ntinda");
 let citizen3 = new citizen("Nunu", "Munyankole", "Abahinda", "Mbarara");

 //creating a loop to print out the properties of citizen1
 document.write("<br> This citizen is: ");
for(let key in citizen1)
 {
     
     document.write("<br> " + citizen1[key]);
 }

 /*creating a loop to print out the properties of citizen2*/
 document.write("<br> This citizen is: ");
 for(let key in citizen2)
{
     document.write("<br> " + citizen2[key]);
 }
 /*creating a loop to print out the properties of citizen3*/
 document.write("<br> This citizen is: ");
 for(let key in citizen3)
 {

     document.write("<br> " + citizen3[key]);
 }

 /*declaring object daughter and assigning properties to it*/
function daughter(name, dob, contact)
 {
 this.name=name;
 this.dob=dob;
 this.contact=contact;
 }

 /*initiating  three objects with constructors*/
 let daughter1 = new daughter("nisha", "22-04-1997", "948392");
 let daughter2 = new daughter("trisha", "23-05-1998", "839893");
 let daughter3 = new daughter("nicole", "21-06-1898", "9389437");

/*creating a loop to print out the properties of daughter*/
document.write(" <br> This daughter is: ");
for(let key in daughter1)
 {
    
 document.write("<br>" + daughter1[key]);
 }

 document.write(" <br> This daughter is: ");
 for(let key in daughter2)
{

     document.write("<br> " + daughter2[key]);
}
document.write(" <br> This daughter is:");
for(let key in daughter3)
{
    document.write("<br>" + daughter3[key]);
 }