import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import User from '../../shared/user';

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

  onClick(): void {
    this.dialogRef.close(this.user);
  }

}
