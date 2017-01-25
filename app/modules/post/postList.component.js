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
var router_1 = require("@angular/router");
var post_service_1 = require("./post.service");
var ListPostComponent = (function () {
    function ListPostComponent(_postService, _route, _router) {
        this._postService = _postService;
        this._route = _route;
        this._router = _router;
    }
    ListPostComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    ListPostComponent.prototype.getList = function () {
        var _this = this;
        this._postService.getList()
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
    };
    return ListPostComponent;
}());
ListPostComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/modules/post/list.component.html'
    }),
    __metadata("design:paramtypes", [post_service_1.PostService,
        router_1.ActivatedRoute,
        router_1.Router])
], ListPostComponent);
exports.ListPostComponent = ListPostComponent;
//# sourceMappingURL=postlist.component.js.map