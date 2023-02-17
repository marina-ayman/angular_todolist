import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})

export class AddingComponent {
  @Input() task = "";
  @Output() emitToParent = new EventEmitter();

  getTask(task : string) {
    this.task = task;
  }
  
  send() {
    // console.log(this.task);
    const clickedTask = this.task;
    this.emitToParent.emit(clickedTask);
  }

}
