import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserService} from '../../providers/user-service/user-service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [UserService]
})
export class HomePage {

  users: any[] = [];

  constructor(
    private navController: NavController,
    private userService: UserService
  ) {
    this.userService.load()
    .then(data => {
      this.users = data;
    }) ;
  }
}
