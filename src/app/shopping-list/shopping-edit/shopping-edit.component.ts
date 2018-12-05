import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.modal';
import {ShoppingListService} from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() addIngredientEvent = new EventEmitter<Ingredient>();
  @Output() deleteIngredientEvent = new EventEmitter<void>();
  constructor(private shoppinService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAdded() {
    const ingredientName: string = this.nameInputRef.nativeElement.value;
    const ingredientAmount: number = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppinService.addIngredient(ingredient);
  }
  onDelete() {
    this.deleteIngredientEvent.emit();
  }
}
