# Task Management Application in Angular

This project is a task management application built in Angular. The application allows users to add tasks, mark tasks as completed, and filter tasks based on their completion status. Below are the details on how to set up and use the application.

## Getting Started

### Prerequisite

Make sure you have the following software installed on your system:
    
- Node.js (https://nodejs.org)
- Angular CLI (https://angular.io/cli)

### Installation

1. Clone the repository to your local machine:

```
git clone <repository_url>
cd task-management-app-angular
```

2. Install the dependencies:

```
npm install
```

## Usage

### Development Server

Run the following command to start the development server:

```
ng serve
```

Navigate to `http://localhost:4200/` in your web browser. The application will automatically reload if you make any changes to the source code.

### Functionality

The task management application provides the following functionalities:

1. **Displaying Tasks:** On the homepage, you will see a list of tasks. Each task will display its title, and there will be a checkbox to mark the task as completed.

2. **Adding Tasks:** To add a new task, click on the "Add Task" button or use the input field provided on the top of the task list. Enter the task details and click on the "Save" button to add the task to the list.

3. **Marking Tasks as Completed:** To mark a task as completed, simply click on the checkbox next to the task's title. The appearance of the task will change to reflect its completion status.

4. **Filtering Tasks:** You can filter tasks based on their completion status using the filter dropdown provided above the task list. The filter options include "All," "Completed," and "Incomplete." Selecting a filter option will display only the tasks that match the selected status.

### Testing

To test the application's functionality, follow these steps:

1. Add a few tasks using the "Add Task" button or input field.
2. Mark some tasks as completed by clicking on the checkboxes.
3. Try filtering tasks using the filter dropdown and observe the task list changing accordingly.

## Folder Structure

The project's folder structure is organized as follows:

```
task-management-app-angular/
  ├── src/
  │   ├── app/
  │   │   ├── components/
  │   │   │   ├── task-list/
  │   │   │   │   ├── task-list.component.html
  │   │   │   │   ├── task-list.component.ts
  │   │   │   ├── task-form/
  │   │   │   │   ├── add-task.component.html
  │   │   │   │   ├── add-task.component.ts
  │   │   ├── models/
  │   │   │   ├── task.model.ts
  │   │   ├── services/
  │   │   │   ├── task.service.ts
  │   ├── app.component.html
  │   ├── app.component.ts
  │   ├── app.module.ts
  ├── angular.json
  ├── package.json
  ├── tsconfig.json
  ├── ...
```

## Contributing

If you'd like to contribute to this project, feel free to open pull requests or issues. Your feedback and suggestions are always welcome.
 
## Acknowledgments

Thanks to Angular and its vibrant community for providing a powerful and flexible framework for building web applications.

## Contact

If you have any questions or need further assistance, you can reach me at [14rishabhdaliya@gmail.com](mailto:14rishabhdaliya@gmail.com).