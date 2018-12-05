import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.modal';
import {RecipeService} from '../../service/recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeServ: RecipeService) {
  }

  ngOnInit() {
  }

  onRecipeSelect() {
    this.recipeServ.recipeSelected.emit(this.recipe);
  }
}
