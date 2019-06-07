import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import User from '../../../../shared/interfaces/User';
import { MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatFormField, MatExpansionPanel } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-expansion-panel',
  templateUrl: './user-expansion-panel.component.html',
  styleUrls: ['./user-expansion-panel.component.css'],
  providers: [
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatFormField
  ]
})
export class UserExpansionPanelComponent implements OnInit {
  @Input() user:User;
  @Output() toggleUserActive = new EventEmitter<User>();
  @Output() onSave = new EventEmitter<User>();
  @Output() onRemove = new EventEmitter<String>();
  userForm = new FormGroup({
    key: new FormControl(''),
    active: new FormControl(true),
    name: new FormControl(''),
    togglToken: new FormControl(''),
  });

  ngOnInit() {
    this.userForm.patchValue(this.user);
  }

  removeUser(key: String) {
    this.onRemove.emit(key);
  }

  onSaveClicked():void {
    this.onSave.emit(this.userForm.value);
  }

  onClickActiveChekbox(input): void {
    const isChecked: boolean = input.checked;
    this.user.active = isChecked;
    this.toggleUserActive.emit(this.user);
  }
}
