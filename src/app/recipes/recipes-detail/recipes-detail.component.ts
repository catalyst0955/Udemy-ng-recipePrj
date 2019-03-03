import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
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
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeServ.getRecipe(this.id);
      }
    );
  }

  addIngredientToSL() {
    this.recipeServ.addIngredientToShoppinList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe() {
    this.recipeServ.deleteRecipe(this.id);
    this.router.navigate(['/recipe']);
  }

}
