import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { CD } from '../../models/Cd';
import { CommunsService } from '../../services/commun.service';

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: CD;

  constructor(public navParams: NavParams,
    public viewCtrl: ViewController,
    public communsService: CommunsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.communsService.cdsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleCD() {
    this.cd.isOn = !this.cd.isOn;
  }
}
