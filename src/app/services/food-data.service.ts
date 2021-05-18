import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';
import { SearchResult } from '../models/search-result';
import { AbridgeFoodItem } from '../models/abridge-food-item';
 
@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  constructor(
    private config: ConfigService,
    private http: HttpClient,
  ) { }

  /**
   * This method allows to find all foods based on [query] and [page]
   * @param query 
   * @param page 
   * @returns 
   */
  findByQuery(query: string, page: number){
    //adding query params to request
    const params = new HttpParams()
      .set('api_key', this.config.apiKey)
      .set('query', query)
      .set('pageNumber', page.toString());

    return this.http.get(`${this.config.endpoint}/foods/search`, { params: params })
      .pipe(
        map( result => result as SearchResult)
      );
  }


  /**
   * Find foods based on an array of [fdcIds]
   * @param favorites 
   * @returns 
   */
  findByArray(arr: number[]){
    //adding query params to request
    const params = new HttpParams()
      .set('api_key', this.config.apiKey)
    // creating the body for the rquest
    let data = {
      fdcIds: arr,
      format: 'abridged'
    }
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post(`${this.config.endpoint}/foods`, body, { params: params })
      .pipe(
        map( result => result as AbridgeFoodItem[])
      );
  }
}
