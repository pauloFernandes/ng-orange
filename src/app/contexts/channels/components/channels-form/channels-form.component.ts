import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Slack from 'src/app/shared/interfaces/Slack';

@Component({
  selector: 'app-channels-form',
  templateUrl: './channels-form.component.html',
  styleUrls: ['./channels-form.component.css']
})
export class ChannelsFormComponent implements OnInit {
  @Input() slackForm:FormGroup;
  @Output() onSave = new EventEmitter<Slack>()
  constructor() { }

  ngOnInit() {
  }

  onSaveClicked() {
    this.onSave.emit(this.slackForm.value);
  }

}
