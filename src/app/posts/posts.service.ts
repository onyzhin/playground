import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  api: string;

  constructor(private http: Http) {
    this.api = 'https://jsonplaceholder.typicode.com';
  }

  public getPosts() {
    const req = '';
    return this.http
      .get(`${this.api}/posts/`)
      .map((res: Response) => res.json());
  }

}
