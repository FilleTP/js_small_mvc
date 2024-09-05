class MealRepository {
  constructor(csvFile) {
    this.csvFile = csvFile;
    this.meals = [];
  }

  allMeals() {
    return this.meals;
  }

  addMeal(meal) {
    this.meals.push(meal);
  }
}

export default MealRepository;
