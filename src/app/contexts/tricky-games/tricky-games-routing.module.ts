import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentChildReferenceComponent } from './pages/parent-child-reference/parent-child-reference.component';

const routes: Routes = [
  {
    path: 'parent-child-reference',
    component: ParentChildReferenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrickyGamesRoutingModule { }
