/*Assignment: create five objects*/

//Object house
/* */
    function house(type, colour, location, flooring, storeys)
    {
        this.type = type;
        this.colour = colour;
        this.location = location;
        this.flooring = flooring;
        this.storeys = storeys;
    }
//Creating new object called house1, and initialising the attributes
    var house1 = new house('bangalow', 'white', 'wali', 'tiles', 1);
    document.write(this.house1.location);

//Using key to instantiate the looping through the properties
    for (let key in house1) {
   
//Printing out all properties
        document.write(house1[key] + "\t")

    var house2 = new house('condo', 'green', 'gayaza', 'wood', 2);
    document.write(this.house2.location);

    for (let key in house2) {

        document.write(house2[key] + "\t")

    var house3 = new house('apartment', 'grey', 'muyenga', 'terrazo', 1);
    document.write(this.house3.location);

    for (let key in house3) {

        document.write(house3[key] + "\t")

    

 //object shoe
   function shoes(type, colour, location, flooring, storeys) {
        this.brand = brand;
        this.material = material;
        this.purpose = purpose;
        this.origin = origin;
        this.grip = grip;
   }

        var shoe1 = new shoe('adidas', 'leather', 'running', 'german', 'metal spikes');
    for (let key in shoe1) {

        document.write(shoe1[key] + "\t")

        var shoe2 = new shoe('nike', 'carbonfibre', 'footbal', 'brazil', 'rubberspikes');
        document.write(this.shoe2.type);

        for (let key in shoe2) {

            document.write(house2[key] + "\t")

        var shoe3 = new shoe('reebok', 'nylon', 'tennis', 'uk', 'foam');
        document.write(this.shoe3.location);

        for (let key in shoe3) {

                document.write(house3[key] + "\t")
//object dog
    function dog(breed, origin, topSpeed, colour, shoulderHeight) {
        this.breed = breed;
        this.origin = orientation;
        this.topSpeed = topSpeed;
        this.colour = colour;
        this.shoulderHeight = shoulderHeight;
    }

    var dog1 = new dog('bloodHound', 'Belgium', '45mph', 'brown', 1);
    document.write(this.dog1.location);

    for (let key in dog1) {

        document.write(dog1[key] + "\t")

    var dog2 = new dog('terrier', 'France', '20mph', 'grey', 0.40);
    document.write(this.dog2.location);

    for (let key in dog2) {

        document.write(dog2[key] + "\t")

        var dog3 = new dog('rottweiler ', 'German', 'black', '40mph', 0.8);
    document.write(this.dog3.location);

    for (let key in dog3) {

        document.write(dog3[key] + "\t")


//object gun
    function gun(name, purpose, calliber, range, length) {
        this.name = name;
        this.purpose = purpose;
        this.calliber = calliber;
        this.range = range;
        this.length = length;
    }

        var gun1 = new house('Barrett M82', 'snipper', '50', '2km', '1.2m');
    for (let key in gun1) {

        document.write(gun1[key] + "\t") 

        var gun2 = new shoe('riffle', 'hunter', '30', '800m', 1);
        document.write(this.gun2.name);

        for (let key in gun2) {

            document.write(gun2[key] + "\t")

        var shoe3 = new shoe('machineGun', 'rapid', '70', '700', 1.7);
        document.write(this.gun3.name);

        for (let key in gun3) {

            document.write(gun3[key] + "\t")



//object politician
    function politician(name, position, work, belly, home) {
        this.name = name;
        this.position = position;
        this.work = work;
        this.belly = belly;
        this.home = home;
    }

    var politician1 = new house('that guy', 'position', 'none', 'big', 'there');
    document.write(this.politician1.location);

    for (let key in politician1) {

    document.write(house1[key] + "\t")

    var politician2 = new politician('jjaja', 'ms', 'useless', 'humangous', 'eyo');
    document.write(this.politician2.name);

    for (let key in politician2) {

        document.write(politician2[key] + "\t")

    var politician3 = new politician('matama', 'counsellor', 'mulya ntula', 'worms');
    document.write(this.politician3.name);

    for (let key in politician3) {

        document.write(politician3[key] + "\t")
