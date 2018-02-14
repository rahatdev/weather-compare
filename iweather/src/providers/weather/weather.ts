//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '79348d8d03a7f427';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'
      + this.apiKey + '/conditions/q/'; //CA/San_Francisco.json';
  }

  getWeather(city, state) {
    return this.http.get(this.url + '/' + state + '/' + city + '.json')
      .map(res => res.json());
  }

}
