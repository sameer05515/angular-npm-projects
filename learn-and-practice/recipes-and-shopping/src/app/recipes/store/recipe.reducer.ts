import {Recipe} from '../recipe.model';
import * as RecipesActions from './recipe.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: []
};

export function recipeReducer(
  state = initialState,
  action: RecipesActions.RecipesActions
) {
  switch (action.type) {
    case RecipesActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...(action as RecipesActions.SetRecipes).payload]
      };
    case RecipesActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, (action as RecipesActions.AddRecipe).payload]
      };
    case RecipesActions.UPDATE_RECIPE:
      const actionPayloadIndex = (action as RecipesActions.UpdateRecipe).payload.index;
      const actionPayloadNewRecipe = (action as RecipesActions.UpdateRecipe).payload.newRecipe;

      const updatedRecipe = {
        ...state.recipes[actionPayloadIndex],
        ...actionPayloadNewRecipe
      };
      const updatedRecipes = [...state.recipes];
      updatedRecipes[actionPayloadIndex] = updatedRecipe;

      return {
        ...state,
        recipes: updatedRecipes
      };
    case RecipesActions.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe, index) => {
          return index !== (action as RecipesActions.DeleteRecipe).payload;
        })
      };
    default:
      return state;
  }
}
