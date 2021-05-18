import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AbridgeFoodItem } from 'src/app/models/abridge-food-item';
import { FoodSearchCriteria } from 'src/app/models/food-search-criteria';
import { FavoritesService } from 'src/app/services/favorites.service';
import { FoodDataService } from 'src/app/services/food-data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  foods: AbridgeFoodItem[] = [];
  lastSearh: FoodSearchCriteria;

  constructor(
    private foodDataService: FoodDataService,
    private toastController: ToastController,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    this.findFavorites();
  }

  /**
   * Handler when the response is susceess.
   * @param response 
   */
  doSuccess = (response: AbridgeFoodItem []) => {
    this.foods = response;
  }

  /**
   * Handler when the response is error.
   * @param error 
   */
  async doError(error){
    const toast = await this.toastController.create({
      message: 'Something was wrong! please try again.',
      duration: 3500
    });
    toast.present();
  }

  /**
   * Find foods based on favorites
   * This method provide:
   *  -Communication with business logic component.
   * @param page 
   */
  findFavorites(page: number = 1){
    const favorites = this.favoritesService.getAll();
    this.foodDataService.findByArray(favorites)
      .subscribe({
        next: this.doSuccess,
        error: this.doError,
      });
  }
}
