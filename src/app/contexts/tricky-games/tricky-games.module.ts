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
import { NotStartedObservableComponent } from './pages/not-started-observable/not-started-observable.component';
import { DebouncedInputComponent } from './pages/debounced-input/debounced-input.component';

@NgModule({
  declarations: [ParentChildReferenceComponent, ChildCounterComponent, DiHierarchyComponent, DiChildComponent, MainComponent, NotStartedObservableComponent, DebouncedInputComponent],
  imports: [
    CommonModule,
    TrickyGamesRoutingModule,
    ThemingModule,
    FormsModule
  ]
})
export class TrickyGamesModule { }
