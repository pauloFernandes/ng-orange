import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentChildReferenceComponent } from './pages/parent-child-reference/parent-child-reference.component';
import { DiHierarchyComponent } from './pages/di-hierarchy/di-hierarchy.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'parent-child-reference',
    component: ParentChildReferenceComponent
  },
  {
    path: 'di-hierarchy',
    component: DiHierarchyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrickyGamesRoutingModule { }
