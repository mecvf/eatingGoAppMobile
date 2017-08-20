import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

  constructor(
    private http: Http
  ) {}

  getMenus() {
    return this.http.get('https://eatinggoapp.herokuapp.com/api/menus')
    .map(res => res.json())
    .toPromise();
  }
}

