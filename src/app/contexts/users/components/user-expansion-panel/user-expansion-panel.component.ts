import { Component, Input, Output, EventEmitter } from '@angular/core';
import User from '../../shared/user';
import { MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatFormField, MatExpansionPanel } from '@angular/material';

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
export class UserExpansionPanelComponent {
  @Input() user:User;
  @Output() toggleUserActive = new EventEmitter<User>();
  @Output() onSave = new EventEmitter<User>();
  @Output() onRemove = new EventEmitter<String>();

  removeUser(key: String) {
    this.onRemove.emit(key);
  }

  onSaveClicked(togglToken: String): void {
    this.user.togglToken = togglToken;
    this.onSave.emit(this.user);
  }

  onClickActiveChekbox(input): void {
    const isChecked: boolean = input.checked;
    this.user.active = isChecked;
    this.toggleUserActive.emit(this.user);
  }
}
