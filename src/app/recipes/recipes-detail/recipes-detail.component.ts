import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Route} from '@angular/router';
import {Recipe} from '../recipe.modal';
import {RecipeService} from '../service/recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
   recipe: Recipe;
   id: number;
  constructor(private recipeServ: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeServ.getRecipe(this.id);
      }
    );
  }
  addIngredientToSL() {
    this.recipeServ.addIngredientToShoppinList(this.recipe.ingredients);
  }

}
