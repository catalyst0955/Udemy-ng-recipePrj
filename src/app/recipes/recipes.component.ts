import {Component, OnInit} from '@angular/core';
import {RecipeService} from './service/recipe.service';
import {Recipe} from './recipe.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipeEl: Recipe;

  constructor(private recipeServ: RecipeService) {
  }

  ngOnInit() {
    this.recipeServ.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipeEl = recipe;
      }
    );
  }

}
