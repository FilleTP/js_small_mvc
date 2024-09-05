import input from "./InputUtil.js";

class MealsView {
  display(meals) {
    meals.forEach((meal) => {
      console.log(`Meal: ${meal.getName()} - Price: ${meal.getPrice()}`);
    })
  }

  async ask(word) {
    const answer = await input(`What is the ${word} of the new meal?`);
    return answer;
  }
}

export default MealsView;
