import { UberComponent } from './uber/uber.component';
import { UserComponent } from './users/user/user.component';
import { PostsItemComponent } from './posts/posts-item/posts-item.component';
import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostsItemComponent
  },
  {
    path: 'uber-test',
    component: UberComponent
  }
];
