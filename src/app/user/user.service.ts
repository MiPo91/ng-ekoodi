import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      new User('Joku', 'Jostain'),
      new User('Joku', 'Muu'),
      new User('Joku', 'Kolmas')
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

}
