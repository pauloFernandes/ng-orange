import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrickyGamesRoutingModule } from './tricky-games-routing.module';
import { ParentChildReferenceComponent } from './pages/parent-child-reference/parent-child-reference.component';
import { ThemingModule } from 'src/app/shared/theming/theming.module';
import { ChildCounterComponent } from './components/child-counter/child-counter.component';
import { FormsModule } from '@angular/forms';
import { DiHierarchyComponent } from './pages/di-hierarchy/di-hierarchy.component';
import { DiChildComponent } from './components/di-child/di-child.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [ParentChildReferenceComponent, ChildCounterComponent, DiHierarchyComponent, DiChildComponent, MainComponent],
  imports: [
    CommonModule,
    TrickyGamesRoutingModule,
    ThemingModule,
    FormsModule
  ]
})
export class TrickyGamesModule { }
