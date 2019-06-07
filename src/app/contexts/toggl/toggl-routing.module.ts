import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TogglComponent } from './pages/toggl/toggl.component';

const routes: Routes = [
  {
    path: '',
    component: TogglComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TogglRoutingModule { }
