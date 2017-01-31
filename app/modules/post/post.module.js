"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var postAdd_component_1 = require("./postAdd.component");
var postlist_component_1 = require("./postlist.component");
var post_service_1 = require("./post.service");
var PostModule = (function () {
    function PostModule() {
    }
    return PostModule;
}());
PostModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([
                { path: 'posts', component: postlist_component_1.ListPostComponent },
                { path: 'post/add', component: postAdd_component_1.AddPostComponent }
            ])
        ],
        declarations: [
            postAdd_component_1.AddPostComponent,
            postlist_component_1.ListPostComponent
        ],
        providers: [
            post_service_1.PostService
        ]
    })
], PostModule);
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map