import { Component, Input } from '@angular/core';
import { Counter } from '../../shared/counter';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.css']
})
export class ChildCounterComponent {

  @Input() counter:Counter;

  poorReset() {
    this.counter = {
      currentIndex: 0
    };
  }

  increment() {
    this.counter.currentIndex++;
  }

  decrement() {
    this.counter.currentIndex--;
  }

}
