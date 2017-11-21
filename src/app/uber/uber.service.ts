import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UberService {
  api: string;

  constructor(private http: Http) {
    this.api = 'https://jsonplaceholder.typicode.com';
  }

  public getProducts() {
    const req = '';
    return this.http
      .get(`https://api.uber.com/v1.2/products?latitude=37.7752315&longitude=-122.418075/`);
  }

}
