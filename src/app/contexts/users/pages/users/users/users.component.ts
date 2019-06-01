import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../../shared/users.service';
import User from '../../../shared/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: Observable<Array<User>>
  constructor(private usersService:UsersService) {
    this.users = this.usersService.list();
  }

}
