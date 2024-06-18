import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter();
  @Output() add = new EventEmitter<NewTask>();

  title: string = '';
  summary: string = '';
  dueDate: string = '';
  onCancel() {
    this.cancelTask.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    });
  }
}
