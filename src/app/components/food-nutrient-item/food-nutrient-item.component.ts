import { Component, Input, OnInit } from '@angular/core';
import { AbridgeFoodNutrients } from 'src/app/models/abridge-food-nutrients';

@Component({
  selector: 'app-food-nutrient-item',
  templateUrl: './food-nutrient-item.component.html',
  styleUrls: ['./food-nutrient-item.component.scss'],
})
export class FoodNutrientItemComponent implements OnInit {
  
  @Input() nutrient: AbridgeFoodNutrients;

  constructor() { }

  ngOnInit() {
  }

}
