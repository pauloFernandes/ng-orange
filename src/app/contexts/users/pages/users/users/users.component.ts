import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../../shared/users.service';
import User from '../../../shared/user';
import { MatDialog } from '@angular/material';
import { NewUserDialogComponent } from '../../../components/new-user-dialog/new-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: Observable<Array<User>>
  constructor(private usersService:UsersService, public dialog: MatDialog) {
    this.users = this.usersService.list();
  }

  openDialogForm():void {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '400px',
      data: { active: true, name: '', togglToken: '' }
    });

    dialogRef.afterClosed().subscribe((user: User) => {
      this.create(user);
    })
  }

  create(user: User) {
    return this.usersService.create(user);
  }

  update(user: User) {
    return this.usersService.update(user);
  }

}
