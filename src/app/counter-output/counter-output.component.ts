import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import{selectDoubleCount,selectCount} from '../store/counter.selector'

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports:[AsyncPipe]
})
export class CounterOutputComponent {
  count$:Observable<number>;
  doubleCount$:Observable<number>

  constructor(
    private store:Store<{counter:number}>
    ) {
      this.count$ = store.select(selectCount)
      this.doubleCount$=store.select(selectDoubleCount)
    }
}
