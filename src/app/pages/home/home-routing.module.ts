import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'foods',
        loadChildren: () => import('../../pages/foods/foods.module').then( m => m.FoodsPageModule)
      },
      {
        path: 'food/detail',
        loadChildren: () => import('../../pages/food-detail/food-detail.module').then( m => m.FoodDetailPageModule)
      },
      {
        path: 'food/favorites',
        loadChildren: () => import('../../pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
