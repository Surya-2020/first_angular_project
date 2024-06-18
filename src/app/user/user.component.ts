import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) ids!: string;
  // @Input({required: true}) userName! :string;
  @Input({ required: true }) selected!: boolean;
  @Output() clickedName = new EventEmitter<string>();

  // onClick2() {
  //   this.clickedName.emit(this.userName);
  // }
  onClick() {
    this.clickedName.emit(this.ids);
  }
}
