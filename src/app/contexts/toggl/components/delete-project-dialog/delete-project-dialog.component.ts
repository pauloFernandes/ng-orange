import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import TogglProject from 'src/app/shared/interfaces/TogglProject';

@Component({
  selector: 'app-delete-project-dialog',
  templateUrl: './delete-project-dialog.component.html',
  styleUrls: ['./delete-project-dialog.component.css']
})
export class DeleteProjectDialogComponent {
  constructor(
    public dialogRef:MatDialogRef<DeleteProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public project:TogglProject
  ) { }

  onRemove(): void {
    this.dialogRef.close(this.project);
  }

}
