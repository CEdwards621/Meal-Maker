const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },    
    set appetizers(appetizerIn) {
			this._appetizers.push(appetizerIn);
    },  
    get mains() {
      return this._mains;
    },    
    set mains(mainIn) {
      this._mains.push(mainIn);
    }, 
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertIn) {
      this._desserts.push(dessertIn);
    }
  },

	get courses () {
    return this._courses.appetizers;
    return this._courses.mains;
    return this._courses.desserts;
  }, 
 	addDishToCourse(courseName,dishName,dishPrice) {
    const dish = {
    	name: dishName,
      price: dishPrice,   
    };
    
    this._courses[courseName].push(dish);    
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
	generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = (appetizer.price + main.price + dessert.price);
    
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is $${totalPrice}.`;    
  },
};

menu.addDishToCourse('appetizers','calamari',8.99);
menu.addDishToCourse('appetizers','Ceaser Salad', 6.50);
menu.addDishToCourse('appetizers','Bruchetta', 7.99);
menu.addDishToCourse('mains', 'Steak Dinner', 29.99);
menu.addDishToCourse('mains', 'Spaghetti', 13.99);
menu.addDishToCourse('mains', 'Tacos', 12.50);
menu.addDishToCourse('desserts', 'Chocolate Cake', 7.99);
menu.addDishToCourse('desserts', 'Key Lime Pie', 6.99);
menu.addDishToCourse('desserts', 'Ice Cream Sundae', 5.99);

let meal = menu.generateRandomMeal();
console.log(meal);
