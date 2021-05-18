import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';
import { AbridgeFoodItem } from 'src/app/models/abridge-food-item';
import { FoodSearchCriteria } from 'src/app/models/food-search-criteria';
import { SearchResult } from 'src/app/models/search-result';
import { FoodDataService } from 'src/app/services/food-data.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  foods: AbridgeFoodItem[] = [];
  query: string = '';
  lastSearh: FoodSearchCriteria ;

  constructor(
    private foodDataService: FoodDataService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.findByQuery();
  }

  /**
   * Handler when the response is susceess.
   * @param response 
   */
  doSuccess = (response: SearchResult) => {
    this.foods = (this.lastSearh == undefined || this.lastSearh.query === this.query) 
      ? this.foods.concat(response.foods) : response.foods;

    this.lastSearh = response.foodSearchCriteria;
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
   * Find foods based on [page] and [query]
   * This method provide:
   *  -Communication with business logic component.
   * @param page 
   */
  findByQuery(page: number = 1){
    this.foodDataService.findByQuery(this.query, page)
      .subscribe({
        next: this.doSuccess,
        error: this.doError,
        complete: () => {
          this.infiniteScroll.complete();
        }
      });
  }

  /**
   * This function allows load more data to [foods] 
   */
  loadMoreData(){
    // custom rule for disable ionic infinite scroll
    if(this.lastSearh.pageNumber >= 9){
      this.infiniteScroll.disabled = true;
    }
    this.findByQuery(this.lastSearh.pageNumber + 1);
  }
}
