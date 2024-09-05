import MealsView from "./MealsView.js";
import Meal from "./Meal.js";

class MealsController {
  constructor(mealRepository) {
    this.mealRepository = mealRepository;
    this.mealsView = new MealsView();
  }

  listMeals() {
    const meals = this.mealRepository.allMeals();
    this.mealsView.display(meals);
  }

  async createMeal() {
    const name =  await this.mealsView.ask("name");
    const price = await this.mealsView.ask("price");
    const meal = new Meal(name, price);
    this.mealRepository.addMeal(meal);
  }
}

export default MealsController;
