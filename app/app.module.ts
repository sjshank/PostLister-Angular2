import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AppComponent }  from './app.component';
import { HomeComponent } from './modules/home/home.component';

import { PostModule } from './modules/post/post.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    PostModule,
    Ng2PaginationModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers:[],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
