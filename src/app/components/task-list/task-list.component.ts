import { Component } from '@angular/core';
import { Task } from '../../task.modal';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  allTasks: Task[] = [
    { id: 1, title: 'Buy groceries done', isCompleted: false },
    { id: 2, title: 'Walk the dog', isCompleted: true },
    { id: 3, title: 'Read a book', isCompleted: false },
  ];

  // Create a copy of allTasks that will be used for filtering
  tasks: Task[] = this.allTasks.slice();

  filterType: 'all' | 'completed' | 'incomplete' = 'all';

  handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: this.allTasks.length + 1,
      title: newTaskTitle,
      isCompleted: false,
    };
    this.allTasks.push(newTask);
    this.filterTasks(this.filterType); // Reapply the current filter after adding a new task
  }

  filterTasks(type: 'all' | 'completed' | 'incomplete') {
    this.filterType = type;
    switch (type) {
      case 'completed':
        this.tasks = this.allTasks.filter((task) => task.isCompleted);
        break;
      case 'incomplete':
        this.tasks = this.allTasks.filter((task) => !task.isCompleted);
        break;
      default:
        this.tasks = this.allTasks.slice();
        break;
    }
  }
}
