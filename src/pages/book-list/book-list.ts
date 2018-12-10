import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { ModalController, MenuController } from 'ionic-angular';
import { LendBookPage } from '../lend-book/lend-book';
import { CommunsService } from '../../services/commun.service';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
  booksList: Book[];

  constructor(private modalCtrl: ModalController,
    private communsService: CommunsService,
    private menuCtrl: MenuController) { }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  ionViewWillEnter() {
    this.booksList = this.communsService.booksList.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, { index: index });
    modal.present();
  }

}
