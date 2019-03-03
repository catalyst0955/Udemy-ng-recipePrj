import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.modal';
import {RecipeService} from '../service/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];


  constructor(private recipeServ: RecipeService
    , private router: Router
    , private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipeServ.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipeServ.getRecipes();
  }

  onNewRecipes() {
    this.router.navigate(['new'], {relativeTo: this.route});

  }

}
