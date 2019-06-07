import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Slack from 'src/app/shared/interfaces/Slack';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: './new-project-dialog.component.html',
  styleUrls: ['./new-project-dialog.component.css']
})
export class NewProjectDialogComponent {

  constructor(public dialogRef:MatDialogRef<NewProjectDialogComponent>) { }
  slackForm = new FormGroup({
    key: new FormControl(''),
    name: new FormControl(''),
  });
  @Output() onSave: EventEmitter<Slack>;

  onClick(): void {
    this.dialogRef.close(this.slackForm.value);
  }

}
