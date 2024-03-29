import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import User from 'src/app/shared/interfaces/User';
import { UsersService } from '../../shared/users.service';
import { MatDialog } from '@angular/material';
import { NewUserDialogComponent } from '../../components/new-user-dialog/new-user-dialog.component';
import { DeleteUserDialogComponent } from '../../components/delete-user-dialog/delete-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: Observable<Array<User>>
  constructor(private usersService:UsersService, public dialog: MatDialog) {
    this.usersService.initializePath('users');
    this.users = this.usersService.list();
  }

  newUser():void {
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

  confirmRemove(key:String) {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '400px',
      data: { active: true, name: '', togglToken: '' }
    });

    dialogRef.afterClosed().subscribe(() => {
      return this.usersService.remove(key);
    })
  }

}
