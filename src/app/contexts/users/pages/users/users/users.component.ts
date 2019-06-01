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

  list: Observable<Array<User>>
  constructor(private usersService:UsersService) {
    this.list = this.usersService.list();
  }

}
