import { Component, Input, OnInit } from '@angular/core';
import { AbridgeFoodItem } from 'src/app/models/abridge-food-item';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent implements OnInit {
  
  @Input() data: AbridgeFoodItem;

  constructor() { }

  ngOnInit() {}

}
