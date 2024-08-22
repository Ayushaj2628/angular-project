import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component'
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-user';
import { TaskComponent } from './task/task.component';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent], //,NgFor,NgIf
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // users = DUMMY_USERS.slice(1, 2)
  users = DUMMY_USERS;
  // selectedUserId = 'u1';
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
