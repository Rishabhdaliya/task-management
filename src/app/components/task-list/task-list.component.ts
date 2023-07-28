import { Component } from '@angular/core';
import { Task } from '../../task.modal';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, title: 'Buy groceries done ', isCompleted: false },
    { id: 2, title: 'Walk the dog', isCompleted: true },
    { id: 3, title: 'Read a book', isCompleted: false },
  ];

  handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: this.tasks.length + 1,
      title: newTaskTitle,
      isCompleted: false,
    };
    this.tasks.push(newTask);
  }
}
