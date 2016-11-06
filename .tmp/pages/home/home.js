var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
export var HomePage = (function () {
    function HomePage(navCtrl, userService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.users = [];
        this.userService.load()
            .then(function (data) {
            _this.users = data;
        });
    }
    HomePage = __decorate([
        Component({
            selector: 'page-home',template:/*ion-inline-start:"/home/nicobytes/Work/projects/ion-book/demos/demo103/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Demo 103\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let user of users">\n      <ion-avatar item-left>\n        <img [src]="user.picture.medium">\n      </ion-avatar>\n      <h2>{{ user.name.first | uppercase }}</h2>\n      <p>{{ user.email }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/nicobytes/Work/projects/ion-book/demos/demo103/src/pages/home/home.html"*/,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a) || Object, (typeof (_b = typeof UserService !== 'undefined' && UserService) === 'function' && _b) || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());
//# sourceMappingURL=home.js.map