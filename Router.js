import input from "./InputUtil.js";

class Router {
  constructor(mealsController) {
    this.mealsController = mealsController;
    this.running = true;
  }

  async run() {
    while (this.running) {
      console.log("1 for all meals");
      console.log("2 for create a meal");
      console.log("3 for exit");

      const userInput = await input("Please choose an option");

      switch (userInput) {
        case "1":
          this.mealsController.listMeals();
          break;
        case "2":
          await this.mealsController.createMeal();
          break;
        case "3":
          console.log("quitting..");
          this.running = false;
          break;
        default:
          console.log("Please choose a number between 1-3")
          break;
      }
    }
  }
}

export default Router;
