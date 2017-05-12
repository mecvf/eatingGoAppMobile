import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public userService: UserService
  ) {}

  ionViewDidLoad(){
    this.userService.getUsers()
    .then(data => {
      this.users = data.results;
    })
    .catch(error =>{
      console.error(error);
    })
  }
}
