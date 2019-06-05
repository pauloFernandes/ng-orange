import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitlabComponent } from './pages/gitlab/gitlab.component';

const routes: Routes = [
  {
    path: '',
    component: GitlabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitlabRoutingModule { }
