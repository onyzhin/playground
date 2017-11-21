import { UberService } from './uber/uber.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { PostsFilterPipe } from './posts/posts-filter.pipe';
import { PostsItemComponent } from './posts/posts-item/posts-item.component';
import { UberComponent } from './uber/uber.component';
import { PostBusService } from './posts/post.bus.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    PostsComponent,
    PostsFilterPipe,
    PostsItemComponent,
    UberComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: false}),
    UsersModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    PostsService,
    UberService,
    PostBusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
