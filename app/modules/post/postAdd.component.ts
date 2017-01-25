import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
    templateUrl:'app/modules/post/add.component.html'
})

export class AddPostComponent {

    constructor(private _postService: PostService){}                
}