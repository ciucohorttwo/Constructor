/**
 * @author Daniel Comboni
 */

/**
 *  item object constructor
 */
function Item(id, name, category, subCategory, barcode) {

    this.id = id;
    this.name = name;
    this.subCategory = subCategory;
    this.barcode = barcode;
  
    this.addNewItem = function() {
      console.log('a new item has been added');
    }
  
  }
  
  // item instantiaton
  let itemFanta = new Item(1, 'fanta', 'Soft Drink', 'soda', '12345');
  console.log(itemFanta);
  
  
  /**
   * purchase object constructor
   */
  
  function Purchase(id, itemId, unitCost, quantity, totalCost) {
  
    this.id = id;
    this.itemId = itemId;
    this.unitCost = unitCost;
    this.quantity = quantity;
    this.totalCost = totalCost;
  
    this.purchaseItem = function() {
      console.log('a new item has been purchased');
    }
  
  }
  
  // instantiating the purchase constructor
  let aPurchase = new Purchase(1, 1, 1000, 2, 2000);
  console.log(aPurchase);
  
  
  /**
   * employee object constructor
   */
  function Employee(name, email, password, title, salary) {
  
    this.name = name;
    this.email = email;
    this.password = password;
    this.title = title;
    this.salary = salary;
  
    this.attendMeeting = function() {
      console.log('the employee has attended the meeting');
    }
  
  }
  
  // instantiating the Employee constructor
  let employeeOne = new Employee('Mamboleo', 'mamboleo@gmail.com', 'the password', 'Manager', 1000000);
  console.log(employeeOne);
  employeeOne.attendMeeting()
  
  
  /**
   * screen object constructor
   */
  function Screen(manufacturer, type, size, isTouch, curvature) {
    this.manufacturer = manufacturer;
    this.type = type;
    this.size = size;
    this.isTouch = isTouch;
    this.curvature = curvature;
  
    this.start = function() {
      console.log('the screen is starting up...');
    }
  }
  
  
  let screenOne = new Screen('samsung', 'LCD', '32 inch', true, 'curved');
  console.log(screenOne);
  
  /**
   *  vehicle object constructor
   */
  
  function Vehicle(model, color, yearOfMake, manufacturer, type) {
    this.model = model;
    this.color = color;
    this.yearOfMake = yearOfMake;
    this.manufacturer = manufacturer;
    this.type = type;
  
    this.ignite = function() {
      console.log('the vehicle is igniting...');
    }
  
  }
  
  
  let vehicleOne = new Vehicle('X5', 'gray','2017','BMW', 'SUV');
  console.log(vehicleOne);