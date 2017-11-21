import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostBusService {
  currentNumber: Subject<Number> = new Subject<Number>();

  constructor() {}
}
