// For some reason code not working. Error says that 'dish' is not defined?

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses.push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this.courses.push(dish);
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}, and the total price is ${totalPrice}`;
  },
};

menu.addDishToCourse("appetizers", "salad", 4.0);
menu.addDishToCourse("appetizers", "wings", 4.0);
menu.addDishToCourse("appetizers", "fries", 4.0);

menu.addDishToCourse("mains", "steak", 10.0);
menu.addDishToCourse("mains", "pizza", 9.5);
menu.addDishToCourse("mains", "salmon", 12.0);

menu.addDishToCourse("desserts", "ice cream", 5.0);
menu.addDishToCourse("desserts", "coffee", 3.0);
menu.addDishToCourse("desserts", "brownie", 6.2);

const meal = menu.generateRandomMeal();
console.log(meal);
