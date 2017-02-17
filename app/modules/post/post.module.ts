import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AddPostComponent }  from './postAdd.component';
import { ListPostComponent } from './postlist.component';

import { PostService } from './post.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2PaginationModule,
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
