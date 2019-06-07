import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import TogglProject from 'src/app/shared/interfaces/TogglProject';
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
    name: new FormControl(''),
  });
  @Output() onSave: EventEmitter<TogglProject>;

  onClick(): void {
    this.dialogRef.close(this.projectForm.value);
  }

}
