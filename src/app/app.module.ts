import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { PostsFilterPipe } from './posts/posts-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    PostsComponent,
    PostsFilterPipe,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
