import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import TogglProject from 'src/app/shared/interfaces/TogglProject';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-toggl-expansion-panel',
  templateUrl: './toggl-expansion-panel.component.html',
  styleUrls: ['./toggl-expansion-panel.component.css']
})
export class TogglExpansionPanelComponent implements OnInit {
  @Input() project:TogglProject;
  @Output() onSave = new EventEmitter<TogglProject>();
  @Output() onRemove = new EventEmitter<String>();
  projectForm = new FormGroup({
    key: new FormControl(''),
    name: new FormControl(''),
  });

  ngOnInit() {
    this.projectForm.patchValue(this.project);
  }

  removeProject(key:String):void {
    this.onRemove.emit(key);
  }

  onSaveClicked():void {
    this.onSave.emit(this.projectForm.value);
  }
}
