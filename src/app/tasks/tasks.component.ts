import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddTask = false;

  tasks = dummyTasks;

  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTask() {
    this.isAddTask = true;
  }

  onCancel() {
    this.isAddTask = false;
  }

  onAddNewTask(newTask: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
    this.isAddTask=false
  }
}
