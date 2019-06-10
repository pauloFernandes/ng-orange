import { Injectable } from '@angular/core';
import { Countable } from './countable';

@Injectable({
  providedIn: 'root'
})
export class ParentCounterService extends Countable {
  increment() {
    this.index++;
  }
  decrement() {
    this.index--;
  }
}
