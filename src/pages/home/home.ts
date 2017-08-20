import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuService } from '../../providers/menu-service';
import { TipoServiceProvider } from '../../providers/tipo-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  menus: any[] = [];
  tipos: any[] = [];

  constructor(
    public navCtrl: NavController,
    public menuService: MenuService,
    public tipoServiceProvider: TipoServiceProvider
  ) {}

  ionViewDidLoad(){
  
    this.menuService.getMenus()
    .then(data => {
      this.menus = data.results;
    })
    .catch(error =>{
      console.error(error);
    })

    this.tipoServiceProvider.getTipos()
    .then(data2 => {
      this.tipos = data2.results;
    })
    .catch(error2 =>{
      console.error(error2);
    })


  }
}
