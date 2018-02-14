import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

}
