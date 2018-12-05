import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {Recipe} from '../recipe.modal';
import {element} from 'protractor';
import {RecipeService} from '../service/recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeServ: RecipeService) {
  }

  ngOnInit() {
  }
  addIngredientToSL(){
    this.recipeServ.addIngredientToShoppinList(this.recipe.ingredients);
  }

}
