import { Component, Input, OnInit } from '@angular/core';
import { AbridgeFoodItem } from 'src/app/models/abridge-food-item';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent implements OnInit {
  
  @Input() data: AbridgeFoodItem;
  isFavorite: boolean = false;

  constructor(
    private favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    this.isFavorite = this.favoritesService.isFavorite(this.data.fdcId);
  }

  saveToFavorites(){
    if(this.isFavorite){
      this.favoritesService.remove(this.data.fdcId);
    }else{
      this.favoritesService.set(this.data.fdcId);
    }
    this.isFavorite = this.favoritesService.isFavorite(this.data.fdcId);
  }
}
