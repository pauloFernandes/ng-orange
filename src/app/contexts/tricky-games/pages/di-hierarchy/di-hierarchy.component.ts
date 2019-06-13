import { Component } from '@angular/core';
import { Countable } from '../../shared/countable';
import { ParentCounterService } from '../../shared/parent-counter.service';

@Component({
  selector: 'app-di-hierarchy',
  templateUrl: './di-hierarchy.component.html',
  styleUrls: ['./di-hierarchy.component.css'],
  providers: [{ provide: Countable, useClass: ParentCounterService }]
})
export class DiHierarchyComponent {
  constructor(private counter:Countable) {}
}
