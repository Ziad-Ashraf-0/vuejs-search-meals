export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || [];
}

export function setMealsByLetter(state, meals) {
  state.mealsByletter = meals || [];
}

export function setmealsByIngredient(state, meals) {
  state.mealsByIngredient = meals || [];
}

export function setIngredient(state, ingredient) {
  state.ingredient = ingredient;
}
