import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AddPostComponent }  from './postAdd.component';
import { ListPostComponent } from './postlist.component';

import { PostService } from './post.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forChild([
        {path: 'posts', component: ListPostComponent},
        {path: 'post/add', component: AddPostComponent}
    ])
  ],
  declarations: [
    AddPostComponent,
    ListPostComponent
  ],
  providers:[
      PostService
  ]
})
export class PostModule { }
