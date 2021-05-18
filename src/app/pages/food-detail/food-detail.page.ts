import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbridgeFoodItem } from 'src/app/models/abridge-food-item';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.page.html',
  styleUrls: ['./food-detail.page.scss'],
})
export class FoodDetailPage implements OnInit {

  data: AbridgeFoodItem;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.data = this.router.getCurrentNavigation().extras.state as AbridgeFoodItem;
  }

}
