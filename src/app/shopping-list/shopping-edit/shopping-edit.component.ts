import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.modal';
import {ShoppingListService} from '../service/shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppinService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppinService.startedEditing.subscribe((index: number) => {
      this.editItemIndex = index;
      this.editMode = true;
      this.editItem = this.shoppinService.getIngredient(this.editItemIndex);
      this.slForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppinService.updateIngredient(this.editItemIndex, ingredient);
    } else {
      this.shoppinService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }
  onDelete() {
    this.onClear();
    this.shoppinService.deleteIngredient(this.editItemIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
