import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recipe.modal';
import {Ingredient} from '../../shared/ingredient.modal';
import {ShoppingListService} from '../../shopping-list/service/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('test Recipe',
      'Just for tewst',
      'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Vegetable', 10)
      ]),
  new Recipe('Another test Recipe',
  'Just for tewst',
  'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg',
  [
    new Ingredient('Chocolate', 5),
    new Ingredient('Cream', 10)
  ]
)];

  constructor(private slServ: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppinList(ingredients: Ingredient[]) {
    this.slServ.addIngredients(ingredients);
  }
}
