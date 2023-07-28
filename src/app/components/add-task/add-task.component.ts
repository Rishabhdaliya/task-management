import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task.modal';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  newTask: string = '';

  @Output() addTaskEvent = new EventEmitter<string>(); // Emitting the new task title

  addTask() {
    if (this.newTask.trim() !== '') {
      this.addTaskEvent.emit(this.newTask); // Emit the new task title to the parent component
      this.newTask = ''; // Reset the input field after emitting the value
    }
  }
}
