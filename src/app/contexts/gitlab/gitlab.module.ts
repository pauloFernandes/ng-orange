import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitlabRoutingModule } from './gitlab-routing.module';
import { GitlabComponent } from './pages/gitlab/gitlab.component';
import { ThemingModule } from 'src/app/shared/theming/theming.module';
import { GitlabExpansionPanelComponent } from './components/gitlab-expansion-panel/gitlab-expansion-panel.component';
import { NewProjectDialogComponent } from './components/new-project-dialog/new-project-dialog.component';
import { DeleteProjectDialogComponent } from './components/delete-project-dialog/delete-project-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GitlabComponent, GitlabExpansionPanelComponent, NewProjectDialogComponent, DeleteProjectDialogComponent],
  imports: [
    CommonModule,
    GitlabRoutingModule,
    ThemingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [NewProjectDialogComponent, DeleteProjectDialogComponent]
})
export class GitlabModule { }
