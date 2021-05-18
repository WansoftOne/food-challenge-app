import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodDetailPageRoutingModule } from './food-detail-routing.module';

import { FoodDetailPage } from './food-detail.page';
import { AppCommonsModule } from 'src/app/modules/app-commons/app-commons.module';
import { FoodNutrientItemComponent } from 'src/app/components/food-nutrient-item/food-nutrient-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodDetailPageRoutingModule,
    AppCommonsModule,
  ],
  declarations: [
    FoodDetailPage,
    FoodNutrientItemComponent,
  ]
})
export class FoodDetailPageModule {}
