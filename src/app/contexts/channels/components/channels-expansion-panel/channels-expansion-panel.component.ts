import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import Slack from 'src/app/shared/interfaces/Slack';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-channels-expansion-panel',
  templateUrl: './channels-expansion-panel.component.html',
  styleUrls: ['./channels-expansion-panel.component.css']
})
export class ChannelsExpansionPanelComponent implements OnInit {
  @Input() project:Slack;
  @Output() onSave = new EventEmitter<Slack>();
  @Output() onRemove = new EventEmitter<String>();
  slackForm = new FormGroup({
    key: new FormControl(''),
    name: new FormControl(''),
  });

  ngOnInit() {
    this.slackForm.patchValue(this.project);
  }

  removeProject(key:String):void {
    this.onRemove.emit(key);
  }

  onSaveClicked():void {
    this.onSave.emit(this.slackForm.value);
  }
}
