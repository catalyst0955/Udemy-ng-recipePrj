import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.modal';
import {RecipeService} from '../service/recipe.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];


  constructor(private recipeServ: RecipeService) {
  }

  ngOnInit() {
    this.recipes = this.recipeServ.getRecipes();
  }

}
