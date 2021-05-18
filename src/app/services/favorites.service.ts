import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  
  private favorites: number[] = []
  
  constructor() {
    const local = localStorage.getItem('favorites');
    if(local){
      this.favorites = JSON.parse(local);
    }
  }

  set(value: number){
    if(!this.favorites.find( item => item === value)){
      this.favorites.push(value);
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }
  }

  remove(value: number){
    this.favorites = this.favorites.filter(item => item != value);
    localStorage.setItem('favorites', JSON.stringify(this.favorites))
  }

  isFavorite(value:number): boolean{
    return this.favorites.find( item => item === value) ? true : false;
  }

  getAll(){
    return this.favorites;
  }
}
