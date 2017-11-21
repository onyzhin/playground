import { UberService } from './uber.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {
  constructor(private uberService: UberService) {}

  ngOnInit() {
    this.uberService.getProducts()
      .subscribe(res => console.log(res));
  }
}
