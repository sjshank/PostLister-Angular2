import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IPost } from './post';
import { PostService } from './post.service';

@Component({
    templateUrl:'app/modules/post/list.component.html'
})

export class ListPostComponent implements OnInit {
    posts : IPost;
    public errorMessage : string;
    page : number = 1;

    constructor(private _postService: PostService,
                private _route: ActivatedRoute,
                private _router: Router){}

    ngOnInit(): void {
        this.getList();
    }

    getList() {
        this._postService.getList()
                        .subscribe(
                            posts => {
                                this.posts = posts;
                                console.log(this.posts);
                            }
                            error => this.errorMessage = <string>error);
    }
}