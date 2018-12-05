import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.modal';
import {ShoppingListService} from './service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shopServ: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shopServ.getIngredients();
    this.shopServ.ingredientChange.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
