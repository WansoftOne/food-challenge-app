import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pages =[
    {
      title: 'foods',
      url: '/foods',
      icon: 'fast-food-outline'
    },
  ]
  
  selectedPath = '';

  constructor() {
  }
}
