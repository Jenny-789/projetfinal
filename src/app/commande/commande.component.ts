import { Component, OnInit } from '@angular/core';

import { Article } from '../model/article';
import { Panier } from '../model/panier';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

tab: Array<Article> = new Array<Article>();
panier: Panier;
message: string;
  constructor() { }

  ngOnInit(): void {
    this.getListArticleFroSession();
  }

  getListArticleFroSession(){
    this.message = sessionStorage.getItem('panier');
    this.tab = JSON.parse(this.message);
  }

  getListArticleFroSessionBis(){
    this.message = sessionStorage.getItem('panierbis');
    this.panier = JSON.parse(this.message);
    console.log(this.panier);
    
  }

}
