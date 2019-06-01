import { Component, OnInit, Input } from '@angular/core';
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
}
