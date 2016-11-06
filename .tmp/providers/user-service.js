import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.data = null;
    }
    UserService.prototype.load = function () {
        var _this = this;
        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }
        // don't have the data yet
        return new Promise(function (resolve) {
            _this.http.get('https://randomuser.me/api/?results=25')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data.results;
                resolve(_this.data);
            });
        });
    };
    UserService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserService.ctorParameters = [
        { type: Http, },
    ];
    return UserService;
}());
//# sourceMappingURL=user-service.js.map