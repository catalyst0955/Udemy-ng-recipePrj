import {Injectable} from '@angular/core';
import {Recipe} from '../recipe.modal';
import {Ingredient} from '../../shared/ingredient.modal';
import {ShoppingListService} from '../../shopping-list/service/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChanged = new Subject();

  private recipes: Recipe[] = [
    new Recipe('test Recipe',
      'Just for test',
      'https://y1.yooho.com.tw/images/201708/goods_img/2869_G_1502758521597.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Vegetable', 10)
      ]),
    new Recipe('Another test Recipe',
      'Just for test',
      'https://y1.yooho.com.tw/images/201708/goods_img/2869_G_1502758521597.jpg',
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

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
