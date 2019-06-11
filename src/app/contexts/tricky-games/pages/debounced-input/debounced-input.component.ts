import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-debounced-input',
  templateUrl: './debounced-input.component.html',
  styleUrls: ['./debounced-input.component.css']
})
export class DebouncedInputComponent implements OnInit, OnDestroy {

  @ViewChild('debouncedInput') debouncedInput:ElementRef;
  output:string
  shouldDebounce:boolean = true;
  globalSubscription:Subscription;
  constructor() { }

  ngOnInit() {
    this.registerDebounceObservables();
  }

  ngOnDestroy() {
    this.globalSubscription.unsubscribe();
  }

  registerDebounceObservables() {
    const sourceEvent$ = fromEvent(this.debouncedInput.nativeElement, 'input');
    const debouce$ = sourceEvent$.pipe(
      map((e:any) => e.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      filter(text => text.length > 2),
    );
    const shouldDebounce$ = sourceEvent$.pipe(
      filter(() => !this.shouldDebounce),
      map((ev:any) => ev.target.value),
    );

    this.globalSubscription = merge(
      shouldDebounce$,
      debouce$,
    ).subscribe(
      query => this.output = query
    );
  }
}
