import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PostsService } from './../posts.service';
import { PostBusService } from '../post.bus.service';

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.css']
})
export class PostsItemComponent implements OnInit {
  post: IPost = <IPost>{};
  count: Number = 0;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    public postBusService: PostBusService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postsService
        .getPost(params.id)
        .subscribe(post => (this.post = post));
    });

    this.postBusService.currentNumber
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(number => (this.count = number));
  }

  updateCount(count) {
    this.postBusService.currentNumber.next(count.target.value);
  }
}
