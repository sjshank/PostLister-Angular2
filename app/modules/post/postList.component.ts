import { Component, OnInit } from '@angular/core';

import { IPost } from './post';
import { PostService } from './post.service';

@Component({
    templateUrl:'app/modules/post/list.component.html'
})

export class ListPostComponent implements OnInit {
    posts : IPost;
    public errorMessage : string;

    constructor(private _postService: PostService){}

    ngOnInit(): void {
        this.getList();
    }

    getList() {
        this._postService.getList()
                        .subscribe(
                            posts => this.posts = posts,
                            error => this.errorMessage = <string>error);
    }
}