import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  private _endpoint: string;
  private _apiKey: string;

  constructor() { 
    this.endpoint = "https://api.nal.usda.gov/fdc/v1";
    this.apiKey = "cLoGaWNsUbUzt0fH0QGRMJYJgoPUem8JekOGJUgg";
  }

  get endpoint(): string{
    return this._endpoint;
  }
  
  set endpoint(value: string){
    this._endpoint = value;
  }

  get apiKey(): string{
    return this._apiKey;
  }

  set apiKey(value: string){
    this._apiKey = value;
  }
}
