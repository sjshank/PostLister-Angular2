"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var post_service_1 = require("./post.service");
var AddPostComponent = (function () {
    function AddPostComponent(_postService, _fb) {
        this._postService = _postService;
        this._fb = _fb;
        this.success = '';
        this.successMsg = 'Post has been added successfully !';
        this.errorMessage = '';
        this.postForm = this._fb.group({
            'name': ['', forms_1.Validators.required],
            'userId': ['', forms_1.Validators.required],
            'title': ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(20)]],
            'body': ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(360)]]
        });
    }
    AddPostComponent.prototype.addPost = function () {
        var _this = this;
        if (this.postForm.dirty && this.postForm.valid) {
            this._postService.addPost(this.post)
                .subscribe(function (success) { return _this.success = success; }, function (error) { return _this.errorMessage = error; });
        }
    };
    return AddPostComponent;
}());
AddPostComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/modules/post/add.component.html'
    }),
    __metadata("design:paramtypes", [post_service_1.PostService,
        forms_1.FormBuilder])
], AddPostComponent);
exports.AddPostComponent = AddPostComponent;
//# sourceMappingURL=postAdd.component.js.map