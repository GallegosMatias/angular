import { Component } from '@angular/core';
import { Config } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string;
  public country: string;
  public age: number;
  public club: string;
  public title = 'angular';
  public mostrar_messi: boolean = true;

  constructor(){
    this.name = Config.name;
    this.country = Config.country;
    this.age = Config.age;
    this.club = Config.club;
  }

  ocultarMessi(value){
    this.mostrar_messi = value;
  }
}
