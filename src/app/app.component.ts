import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'todo';
  tasks = [
    "angular tasks" , "php tasks"
  ];


  getFromChild(event : any) {
    this.tasks.push(event);
  }

}
