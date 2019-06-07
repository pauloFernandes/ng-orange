import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import GitlabProject from 'src/app/shared/interfaces/GitlabProject';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gitlab-expansion-panel',
  templateUrl: './gitlab-expansion-panel.component.html',
  styleUrls: ['./gitlab-expansion-panel.component.css']
})
export class GitlabExpansionPanelComponent implements OnInit {
  @Input() project:GitlabProject;
  @Output() onSave = new EventEmitter<GitlabProject>();
  @Output() onRemove = new EventEmitter<String>();
  projectForm = new FormGroup({
    key: new FormControl(''),
    api_token: new FormControl(''),
    project_id: new FormControl(''),
    url: new FormControl(''),
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
