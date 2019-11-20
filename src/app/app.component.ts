import { Component,ComponentRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-webpack-change-require-string';
  constructor(){
    let classRef=ComponentRef;
    console.log(classRef);
  }
}
