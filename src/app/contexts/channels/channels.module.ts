import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { ChannelsComponent } from './pages/channels/channels.component';
import { ThemingModule } from 'src/app/shared/theming/theming.module';
import { ChannelsExpansionPanelComponent } from './components/channels-expansion-panel/channels-expansion-panel.component';
import { NewProjectDialogComponent } from './components/new-project-dialog/new-project-dialog.component';
import { DeleteProjectDialogComponent } from './components/delete-project-dialog/delete-project-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChannelsFormComponent } from './components/channels-form/channels-form.component';

@NgModule({
  declarations: [ChannelsComponent, ChannelsExpansionPanelComponent, NewProjectDialogComponent, DeleteProjectDialogComponent, ChannelsFormComponent],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    ThemingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [NewProjectDialogComponent, DeleteProjectDialogComponent]
})
export class ChannelsModule { }
