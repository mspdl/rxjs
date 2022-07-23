import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs';
  observable$!: Observable<any>;
  subscribe!: Subscription;

  ngOnInit() {
    this.observable$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    this.subscribe = this.observable$.subscribe({
      next: (value) => console.log(value),
      error: (error) => {},
      complete: () => console.log('this is the end'),
    });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
