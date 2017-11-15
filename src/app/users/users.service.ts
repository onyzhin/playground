import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  api: string;

  constructor(private http: Http) {
    this.api = 'https://jsonplaceholder.typicode.com';
  }

  public getUsers() {
    const req = '';
    return this.http
      .get(`${this.api}/users/`)
      .map((res: Response) => res.json());
  }

}
