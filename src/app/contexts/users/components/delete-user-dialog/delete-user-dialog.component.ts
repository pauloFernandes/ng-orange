import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import User from '../../../../shared/interfaces/User';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.css']
})
export class DeleteUserDialogComponent {

  constructor(
    public dialogRef:MatDialogRef<DeleteUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user:User
  ) { }

  onRemove(): void {
    this.dialogRef.close(this.user);
  }

}
