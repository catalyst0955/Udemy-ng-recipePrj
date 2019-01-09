import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipestartComponent} from './recipes/recipestart/recipestart.component';
import {RecipesDetailComponent} from './recipes/recipes-detail/recipes-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children:[
    { path: '', component: RecipestartComponent},
      {path: ':id', component: RecipesDetailComponent}
    ]},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
