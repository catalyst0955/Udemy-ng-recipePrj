import {Component, OnInit} from '@angular/core';
import {RecipeService} from './service/recipe.service';
import {Recipe} from './recipe.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}
