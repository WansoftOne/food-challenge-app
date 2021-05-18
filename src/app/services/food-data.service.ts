import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';
import { SearchResult } from '../models/search-result';
 
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
}
