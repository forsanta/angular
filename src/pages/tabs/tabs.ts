import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookListPage } from '../book-list/book-list';
import { CdListPage } from '../cd-list/cd-list';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  bookListRoot = BookListPage
  cdListRoot = CdListPage

  constructor(public navCtrl: NavController) {}

}
