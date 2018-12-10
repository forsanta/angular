import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { CommunsService } from '../../services/commun.service';
import { CD } from '../../models/Cd';
import { LendCdPage } from '../lend-cd/lend-cd';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdsList: CD[];

  constructor(private modalCtrl: ModalController,
    private communsService: CommunsService,
    private menuCtrl: MenuController) { }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  ionViewWillEnter() {
    this.cdsList = this.communsService.cdsList.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, { index: index });
    modal.present();
  }

}
