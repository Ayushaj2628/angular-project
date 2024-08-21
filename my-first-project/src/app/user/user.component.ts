import { Component, Input, input, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-user';


// const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
//  selectedUser = signal(DUMMY_USERS[randonIndex]) ;
//  imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar)


//  get imagePath() {
//   return 'assets/users/' + this.selectedUser.avatar
//  }

@Input({required: true}) avatar!: string;
@Input({required: true}) name!: string;

// avatar = input<string>();
// avatar = input.required<string>();
// name = input.required<string>();

// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar();
// })

get imagePath(){
  return 'assets/users/' + this.avatar;
}

 onSelectUser(){
  // const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  // this.selectedUser.set(DUMMY_USERS[randonIndex])
 }

}
