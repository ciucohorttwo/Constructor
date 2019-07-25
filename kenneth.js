/* object teacher*/
function teacher(FirstName, LastName, position, age) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.position = position;
    this.age = age;
}

teacher1 = new teacher('Walter', 'Patel', 'deputy', '30 years old')
teacher2 = new teacher('Class teacher', 30, 'Brian', 'Omaa')
teacher3 = new teacher('Head teacher', 40, 'Kenneth', 'Ocitti')

for (let record in teacher1) {
    document.write('<p><b>' + this.teacher1[record] + '</b></p>');
}
for (let record in teacher2) {
    document.write('<p><i>' + this.teacher2[record] + '</i></p>');
}
for (let record in teacher3) {
    document.write('<p><b>' + this.teacher3[record] + '</b></p>');
}

/* object person*/
function person(name, age, dob, size, origin) {
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.size = size;
    this.origin = origin;
}

person1 = new person('Omega Samson', 25, 1995, '72 inches', 'teso');
person2 = new person('kenneth Mandela', 23, 1997, '78.9 inches', 'alur');
person3 = new person('Lucky Kidega', 27, 1993, '71.4 inches', 'buganda');

for (let history in person1) {
    document.write('<p><b> ' + this.person1[history] + '</b></p>');
}
for (let history in person2) {
    document.write('<p><i> ' + this.person2[history] + '</i></p>');
}
for (let history in person3) {
    document.write('<p><b> ' + this.person3[history] + '</b></p>');
}

/* object country*/
function country(name, size, language, population, color) {
    this.name = name;
    this.size = size;
    this.language = language;
    this.population = population;
    this.color = color;
}

country1 = new country('Uganda', 'small', 'English', '30millions', 'black');
country2 = new country('Kenya', 'large', 'English and Kiswahili', '39.9millions', 'black');
country3 = new country('Canada', 'small', 'English and French', '23.87millions', 'white');

for (let status in country1) {
    document.write('<p><b> ' + this.country1[status] + '</b></p>');
}
for (let status in country2) {
    document.write('<p><i> ' + this.country2[status] + '</i></p>');
}
for (let status in country3) {
    document.write('<p><b> ' + this.country3[status] + '</b></p>');
}

/* object teacher*/
function company(name, product, location, yearOfStart, sponsor) {
    this.name = name;
    this.product = product;
    this.location = location;
    this.yearOfStart = yearOfStart;
    this.sponsor = sponsor;
}

company1 = new company('Laboremus', 'software development', 'Muyenga', 2013, 'NORAD');
company2 = new company('Davis & shirtliff', 'Electrical appliances', 'Nakawa', 1996, 'none');
company3 = new company('Airtel Uganda', 'Network providers', 'Kampala(main office)', 1986, 'none');

for (let about in company1) {
    document.write('<p><b> ' + this.company1[about] + '</b></p>');
}
for (let about in company2) {
    document.write('<p><i> ' + this.company2[about] + '</i></p>');
}
for (let about in company3) {
    document.write('<p><b> ' + this.company3[about] + '</b></p>');
}

/* object teacher*/
function hospital(name, location, services, workingHours, availableJobs) {
    this.name = name;
    this.location = location;
    this.services = services;
    this.workingHours = workingHours;
    this.availableJobs = availableJobs;
}

hospital1 = new hospital('Mulago', 'Wandegeya', 'heart, eyes,ears and other more.', '24hrs', 'Nursing jobs.');
hospital2 = new hospital('Life link', 'Namugongo', 'Eyes and ears especilly.', '24hrs', 'Surgeon');
hospital3 = new hospital('Children hospital', 'Nalyaa', 'Services for kids below 18yrs.', '24hrs', 'Optician.');

for (let request in hospital1) {
    document.write('<p><b> ' + this.hospital1[request] + '</b></p>');
}
for (let request in hospital2) {
    document.write('<p><i> ' + this.hospital2[request] + '</i></p>');
}
for (let request in hospital3) {
    document.write('<p><b> ' + this.hospital3[request] + '</b></p>');
}
