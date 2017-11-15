import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { UsersService } from './../users/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;
  searchTerm: string;

  constructor(
    public postsService: PostsService,
    public usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.postsService.getPosts().subscribe(posts => {
        posts.forEach(post => {
          users.forEach(user => {
            if (post.userId === user.id) {
              post.user = user;
            }
          });
        });
        this.posts = posts;
      });
    });
  }

  onSearch(term) {}

  test(): void {
    console.log('test');
  }
}
