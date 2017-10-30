import {Component} from '@angular/core';
import {User} from './user/user';

@Component({
  selector: 'ekoodi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedUserName: string;

  constructor() {
    this.selectedUserName = 'ekoodi';
  }

  changeName(): void {
    this.selectedUserName = '3k00d1';
  }

  onUserSelected(user: User) {
    console.log(user);
    this.selectedUserName = user.firstName + ' ' + user.lastName;
  }

}
