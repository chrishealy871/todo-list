import { Component } from '@angular/core';
import { FilterPipe } from './pipes'

@Component({
  selector: 'search-app',
  templateUrl: './search.html',
  styleUrls: ['./app.component.css']
})
export class SearchComponent {
  title:String;
  names:any;
  constructor(){
    this.title = "Angular 2 simple search";
        this.names = ['Prashobh','Abraham','Anil','Sam','Natasha','Marry','Zian','karan']
  }
}