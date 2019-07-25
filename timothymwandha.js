/* BEGINING OF ASSIGNMENT ONE - BY TIMOTHY WAMPA MWANDHA
USING THE KEY WORDS "THIS" AND "LET KEY IN"
USING THE "HOME CARE PROJECT" WHERE CLASSES ARE
1 - HOUSE HELP 2 - HOME OWNER 3 - RECRUITMENT AGENCY*/


function createHouseHelp(firstName, lastName, age, gender, tribe, religion, NIN, NOK, mobileno)
{
this.firstName = firstName
this.lastName = lastName
this.age = age
this.gender = gender
this.tribe = tribe
this.religion = religion
this.NIN = NIN
this. NOK = NOK
this. mobileno = mobileno
}
var houseHelp1 = new createHouseHelp("bosco", "lule", "23", "male", "ganda","christian", "BL1234", "JohnLule", "0772123456");
var houseHelp2 = new createHouseHelp ("juma", "ali", "24", "male", "luo","moslem", "JA9876", "IsaMusa", "0753456789");
var houseHelp3 = new createHouseHelp("robina", "nakigude", "25", "female", "soga","christian", "RN4567", "MaryJane", "0709876543");
var houseHelp4 = new createHouseHelp("pross", "mbabazi", "21", "female", "nkole","sda", "PR2678", "amandaBisha", "0798457543");
var houseHelp5 = new createHouseHelp("rose", "akello", "26", "female", "acholi","christian", "RK3478", "peterOtim", "071234987");

for (let key in houseHelp1){
    console.log(houseHelp1[key])}

    for (let key in houseHelp2){
        console.log(houseHelp2[key])}
        
        for (let key in houseHelp3){
            console.log(houseHelp3[key])}

            for (let key in houseHelp4){
                console.log(houseHelp4[key])}

/*END OF ASSIGNMENT ONE*/

/*BEGINING OF ASSIGMENT TWO*/

function createHomeOwner(firstName, lastName, age, gender, tribe, religion, NIN, maritalstatus, children, mobileno)
{
this.firstName = firstName
this.lastName = lastName
this.age = age
this.gender = gender
this.tribe = tribe
this.religion = religion
this.NIN = NIN
this. maritalstatus = maritalstatus
this.children = children
this. mobileno = mobileno
}
var houseOwner1 = new createHomeOwner("Moses", "Matovu", "43", "male", "ganda","moslem", "MM3190", "married", "yes", "070987654");
var houseOwner2 = new createHomeOwner("Sarah", "Mugisha", "34", "female", "kiga","christian", "SM8974", "single", "yes", "0756789234");
var houseOwner3 = new createHomeOwner("Agnes", "Nandutu", "39", "female", "gishu","christian", "AN3589", "married", "yes", "070987654");
var houseOwner4 = new createHomeOwner("peter", "Akena", "35", "male", "Langi","SDA", "PA4579", "divorced", "yes", "075660094");
var houseOwner5 = new createHomeOwner("juliet", "Obonyo", "33", "female", "itesot","christian", "JO3190", "married", "no", "0776902345");

for (let key in houseOwner1){
    console.log(houseOwner1[key])}

    for (let key in houseOwner2){
        console.log(houseOwner2[key])}
        
        for (let key in houseOwner3){
            console.log(houseOwner3[key])}

            for (let key in houseOwner4){
                console.log(houseOwner4[key])}

                for (let key in houseOwner5){
                    console.log(houseOwner5[key])}

/* END OF ASSIGNMENT TWO*/

/*BEGINING OF ASSIGMNET THREE*/

function createAgent(companyName, companyAddress1, companyAddress2, coRegNo, directorfName, directorlname, email, landline, mobileno)
{
this.companyName = companyName
this.companyAddress1 = companyAddress1
this.companyAddress2 = companyAddress2
this.coRegNo = coRegNo
this.directorfName = directorfName
this.directorlname = directorlname
this.email = email
this. landline = landline
this. mobileno = mobileno
}
var Agent1 = new createAgent("Alpha", "plot123", "43BukotoStreet", "1234", "John","Baptist", "john@gmail.com", "031234567", "070987479");
var Agent2 = new createAgent("Beta", "3rdFloor", "Mutasa Kafeero", "8765", "Jude","Mukooza", "jude@hotmail.com", "0414567890", "0756789987");
var Agent3 = new createAgent("Omega", "plot1115", "39KyadondoRoad", "3456", "Simon","Kibita", "simon@yahoo.com", "031987654", "070987348");
var Agent4 = new createAgent("Zebra", "4thFloor", "Avemar Mall", "9087", "Sherry","Kibazo", "sherry@aol.com", "0414890765", "075660765");
var Agent5 = new createAgent("Lion", "Shop4", "33", "Oasis_Mall", "4568","Rhona", "Achieng", "rhona@msn.com", "031234987", "0776902765");

for (let key in Agent1){
    console.log(Agent1[key])}

    for (let key in Agent2){
        console.log(Agent2[key])}
        
        for (let key in Agent3){
            console.log(Agent3[key])}

            for (let key in Agent4){
                console.log(Agent4[key])}

                for (let key in Agent5){
                    console.log(Agent5[key])}

/* END OF ASSIGNMENT THREE*/


