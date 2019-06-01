import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitlabRoutingModule } from './gitlab-routing.module';
import { GitlabComponent } from './gitlab/gitlab.component';

@NgModule({
  declarations: [GitlabComponent],
  imports: [
    CommonModule,
    GitlabRoutingModule
  ]
})
export class GitlabModule { }
