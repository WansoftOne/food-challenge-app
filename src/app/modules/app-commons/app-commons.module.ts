import { NgModule } from '@angular/core';
import { FoodItemComponent } from 'src/app/components/food-item/food-item.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FoodItemComponent,
  ],
  exports:[
    HeaderComponent,
    FoodItemComponent,
  ]
})
export class AppCommonsModule { }
