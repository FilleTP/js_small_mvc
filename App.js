import MealRepository from "./MealRepository.js";
import MealsController from "./MealsController.js";
import Router from "./Router.js";

const mealRepository = new MealRepository();
const mealsController = new MealsController(mealRepository);
const router = new Router(mealsController);
router.run();
