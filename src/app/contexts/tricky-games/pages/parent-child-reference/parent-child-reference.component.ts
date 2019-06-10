import { Component } from '@angular/core';
import { Counter } from '../../shared/counter';

@Component({
  selector: 'app-parent-child-reference',
  templateUrl: './parent-child-reference.component.html',
  styleUrls: ['./parent-child-reference.component.css']
})
export class ParentChildReferenceComponent {
  counter:Counter = {
    currentIndex: 0
  };

  smartReset() {
    this.counter = {
      currentIndex: 0
    }
  }
}
