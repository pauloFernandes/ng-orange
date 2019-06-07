import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import GitlabProject from 'src/app/shared/interfaces/GitlabProject';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: './new-project-dialog.component.html',
  styleUrls: ['./new-project-dialog.component.css']
})
export class NewProjectDialogComponent {

  constructor(public dialogRef:MatDialogRef<NewProjectDialogComponent>) { }
  projectForm = new FormGroup({
    key: new FormControl(''),
    api_token: new FormControl(''),
    project_id: new FormControl(''),
    url: new FormControl(''),
  });
  @Output() onSave: EventEmitter<GitlabProject>;

  onClick(): void {
    this.dialogRef.close(this.projectForm.value);
  }

}
