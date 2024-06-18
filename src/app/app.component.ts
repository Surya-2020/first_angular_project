import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-angular-app';
  users = DUMMY_USERS;
  //userId = 'u1';
  selectedUserId?: string;


  onSelectedUser(ids: string) {
    this.selectedUserId = ids;
    console.log('the user id which is clicked', ids);
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
}
