import {Injectable} from '@angular/core';
import {User} from './user';
import * as _ from 'lodash';

@Injectable()
export class UserService {

  private users: User[];
  private id: number;

  constructor() {
    this.users = [
      new User(1, 'Joku', 'Jostain'),
      new User(2, 'Joku', 'Muu'),
      new User(3, 'Joku', 'Kolmas')
    ];
    this.id = 3;
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.id += 1;
    user.id = this.id;
    this.users.push(Object.assign({}, user));
  }

  removeUser(user: User) {
    _.remove(this.users, function (n) {
      return n.id === user.id;
    });
  }

}
