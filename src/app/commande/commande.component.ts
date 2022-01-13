import { Component, OnInit } from '@angular/core';

import { Article } from '../model/article';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

tab: Array<Article> = new Array<Article>();
message: string;
  constructor() { }

  ngOnInit(): void {
    this.getListArticleFroSession();
  }

  getListArticleFroSession(){
    this.message = sessionStorage.getItem('panier');
    this.tab = JSON.parse(this.message);
  }

}
