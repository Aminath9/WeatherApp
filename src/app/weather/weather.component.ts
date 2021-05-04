import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {WeatherService} from './weather.service.ts'


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  providers:  [ WeatherService ]
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

}
