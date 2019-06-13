import { Component } from '@angular/core';
import { Countable } from '../../shared/countable';
import { ChildCounterService } from '../../shared/child-counter.service';

@Component({
  selector: 'app-di-child',
  templateUrl: './di-child.component.html',
  styleUrls: ['./di-child.component.css'],
  providers: [ChildCounterService]
})
export class DiChildComponent {
  constructor(
    private counter:ChildCounterService,
    private parentCounter: Countable
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
