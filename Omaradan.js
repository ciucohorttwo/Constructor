//object with parameters television
function television(model,power,size,type,shape){
this.model = model;
this.power = power;
this.size = size;
this.type = type;
this.shape = shape;
}
// a new object with a constructor
var television1 =new television("Latest","200wat","39inch","Sony","Zigzag");
var television2 =new television("old","500wat","32inch","Hisense","hip",);
var television3 =new television("China made","500wat","55inch","Figure");

//loop through the aurgment passed to an object
for(let key in television1) {
    console.log(television1[key]);
}

//object with parameters shoe
function shoe(name,model,color,size,label){
    this.name = name;
    this.model = model;
    this.color = color;
    this.size = size;
    this.label = label;
    }
    // a new object with a constructor
    var shoe1 =new shoe("supra","swag","red","42","warap");
    var shoe2 =new shoe("Levis","10i","Blue","48","zoom");
    var shoe3 =new shoe("Zara","Rara","Green","38","wizzy",);
    
    
    //loop through the aurgment passed to an object
    for(let key in shoe1) {
        console.log(shoe1[key]);
    }

//object with parameters school
    function school(floor,block,level,compound,neighbourhood){
        this.floor = floor;
        this.block = block;
        this.level = level;
        this.compound = compound;
        this.neighbourhood = neighbourhood;
        }
        // a new object with a constructor
        var school1 =new school("tiles","99","3rd","wide","nusery");
        var school2 =new school("Ceramic","2","2nd","Medium","Resident",);
        var school3 =new school("Cement","300","4th","Narrow","Shop",);
        
        
        //loop through the aurgment passed to an object
        for(let key in school1) {
            console.log(school1[key]);
        }

//object with parameters plane
        function plane(type,model,manufacturer,color,industry){
            this.type = type;
            this.model = model;
            this.manufacturer = manufacturer;
            this.color = color;
            this.industry = industry;
            }
            // a new object with a constructor
            var plane1 =new plane("Airline","Boeing","China","White","Aircraft");
            var plane2 =new plane("Eagle","Bomberd","Uganda","Blue","Jet");
            var plane3 =new plane("helcopter","flyer","Egypt","Green","Fighter");

            //loop through the aurgment passed to an object
            for(let key in plane1) {
                console.log(plane1[key]);
            }

//object with parameters animal
            function animal(name,sex,type,cry,defence){
                this.name = name;
                this.sex = sex;
                this.type = type;
                this.cry = cry;
                this.defence = defence;
                }
                // a new object with a constructor
                var animal1 =new animal("Goat","Male","crossbreed","meeeeeeeeeh","bitting");
                var animal2 =new animal("Cow","female","Local","Moooooooooh","make noise");
                var animal3 =new animal("Dog","Male","German","gooooooooh","bark");

//loop through the aurgment passed to an object
                for(let key in animal1) {
                    console.log(animal1[key]);
                }
                                        
