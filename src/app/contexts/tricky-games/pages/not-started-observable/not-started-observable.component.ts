import { Component, OnInit, OnDestroy } from '@angular/core';
import { Counter } from '../../shared/counter';
import { interval, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-not-started-observable',
  templateUrl: './not-started-observable.component.html',
  styleUrls: ['./not-started-observable.component.css']
})
export class NotStartedObservableComponent implements OnInit, OnDestroy {
  counter:Counter = { currentIndex: 0 };
  myObservable:Observable<number>;
  mySubscription;
  constructor() {
    this.myObservable = interval(1000).pipe(
      tap(v => console.log(v)),
      map(v => this.counter.currentIndex = v)
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  subscribe() {
    this.mySubscription = this.myObservable.subscribe();
  }

  unsubscribe() {
    this.mySubscription.unsubscribe();
  }

}
