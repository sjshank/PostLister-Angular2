import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from './post.service';

import { IPost } from './post';

@Component({
    templateUrl: 'app/modules/post/add.component.html'
})

export class AddPostComponent {
    post: IPost;
    postForm: FormGroup;

    constructor(private _postService: PostService,
        private _fb: FormBuilder) {

            this.postForm = this._fb.group({
                'name':['', Validators.required],
                'userId': ['', Validators.required],
                'title':['', [Validators.minLength(1), Validators.maxLength(20)]],
                'body':['', [Validators.minLength(1), Validators.maxLength(360)]]
            })
    }


    addPost() {

    }
}