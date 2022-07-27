import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs';
  mySubject$!: ReplaySubject<any>;

  ngOnInit() {
    this.mySubject$ = new ReplaySubject();
    this.mySubject$.subscribe((x) => console.log('First subscribe', x));
    this.mySubject$.next(1);
    this.mySubject$.next(2);
    // this.mySubject$.unsubscribe();
    this.mySubject$.subscribe((x) => console.log('Second subscribe', x));
    this.mySubject$.next(3);
  }

  ngOnDestroy(): void {
    this.mySubject$.unsubscribe();
  }
}
