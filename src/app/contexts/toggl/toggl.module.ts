import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TogglRoutingModule } from './toggl-routing.module';
import { TogglComponent } from './pages/toggl/toggl.component';
import { ThemingModule } from 'src/app/shared/theming/theming.module';
import { TogglExpansionPanelComponent } from './components/toggl-expansion-panel/toggl-expansion-panel.component';
import { NewProjectDialogComponent } from './components/new-project-dialog/new-project-dialog.component';
import { DeleteProjectDialogComponent } from './components/delete-project-dialog/delete-project-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TogglFormComponent } from './components/toggl-form/toggl-form.component';

@NgModule({
  declarations: [TogglComponent, TogglExpansionPanelComponent, NewProjectDialogComponent, DeleteProjectDialogComponent, TogglFormComponent],
  imports: [
    CommonModule,
    TogglRoutingModule,
    ThemingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [NewProjectDialogComponent, DeleteProjectDialogComponent]
})
export class TogglModule { }
