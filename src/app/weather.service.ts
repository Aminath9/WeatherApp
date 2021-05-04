import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(

  getWeather() {
    fetch('api.openweathermap.org/data/2.5/forecast/daily?q=Paris&cnt=14&appid=d1f1192c61bff34c70979e832a2dbab3').then(r => r.json()).then(j => { 
      console.log(j); });
    });
    return this.weather;
  }
}

