import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'ekoodi-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onUserDelete() {
    this.userService.removeUser(this.user);
  }

}
