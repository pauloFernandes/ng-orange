import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentChildReferenceComponent } from './pages/parent-child-reference/parent-child-reference.component';
import { DiHierarchyComponent } from './pages/di-hierarchy/di-hierarchy.component';
import { MainComponent } from './pages/main/main.component';
import { NotStartedObservableComponent } from './pages/not-started-observable/not-started-observable.component';

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
  },
  {
    path: 'not-started-observable',
    component: NotStartedObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrickyGamesRoutingModule { }
