import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'post-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    public pTitle : string = 'Postacular - Angular 2';
    constructor(private _route: ActivatedRoute,
                private _router: Router){
            console.log(_route);
            console.log(_router);
    }
}