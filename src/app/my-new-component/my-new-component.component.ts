import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent {
clicked(event) {
    event.getList(['Prashobh','Abraham','Anil','Sam','Natasha','Marry','Zian','karan'])
  }
}

