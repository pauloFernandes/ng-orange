import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import User from '../../../../shared/interfaces/User';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.css']
})
export class NewUserDialogComponent {
  constructor(
    public dialogRef:MatDialogRef<NewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user:User
  ) { }

  userForm = new FormGroup({
    name: new FormControl(''),
    togglToken: new FormControl(''),
    active: new FormControl(true),
  });

  onClick(): void {
    this.dialogRef.close(this.userForm.value);
  }

}
