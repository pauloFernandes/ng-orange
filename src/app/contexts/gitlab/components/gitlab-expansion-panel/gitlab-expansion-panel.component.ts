import { Component, Input, Output, EventEmitter } from '@angular/core';
import GitlabProject from 'src/app/shared/interfaces/GitlabProject';

@Component({
  selector: 'app-gitlab-expansion-panel',
  templateUrl: './gitlab-expansion-panel.component.html',
  styleUrls: ['./gitlab-expansion-panel.component.css']
})
export class GitlabExpansionPanelComponent {
  @Input() project:GitlabProject;
  @Output() onSave = new EventEmitter<GitlabProject>();
  @Output() onRemove = new EventEmitter<String>();

  removeProject(key:String):void {
    this.onRemove.emit(key);
  }

  onSaveClicked(project:GitlabProject):void {
    this.onSave.emit(project);
  }

}
