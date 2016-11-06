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
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html',
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: UserService, },
    ];
    return HomePage;
}());
//# sourceMappingURL=home.js.map