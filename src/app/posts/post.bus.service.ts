import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PostBusService {
  currentNumber: BehaviorSubject<Number> = new BehaviorSubject(0);

  constructor() {}
}
