import { Component } from '@angular/core';
import { Countable } from '../../shared/countable';
import { ParentCounterService } from '../../shared/parent-counter.service';
import { ChildCounterService } from '../../shared/child-counter.service';

@Component({
  selector: 'app-di-child',
  templateUrl: './di-child.component.html',
  styleUrls: ['./di-child.component.css'],
  providers: [{ provide: Countable, useClass: ChildCounterService }]
})
export class DiChildComponent {
  constructor(
    private counter:Countable,
    private parentCounter: ParentCounterService
  ) { }

  increment() {
    this.counter.increment();
    this.parentCounter.increment();
  }
  decrement() {
    this.counter.decrement();
    this.parentCounter.decrement();
  }
}
