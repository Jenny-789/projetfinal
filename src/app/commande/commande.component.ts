import { Component, OnInit } from '@angular/core';

import { Article } from '../model/article';
import { Panier } from '../model/panier';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

// tab: Array<Article> = new Array<Article>();
// panier: Panier;

panier: Array<Article>
  prixtttab:number[]
  prixtt = 0

message: string;
  constructor() { }

  ngOnInit(): void {
    // this.getListArticleFroSession();
    this.panier = JSON.parse(localStorage.getItem('panier'));
  }

  deletearticle(x) {
    this.panier.splice(x, 1);
    localStorage.setItem("panier", JSON.stringify(this.panier));
  }

  majpanier(){
    localStorage.setItem("panier", JSON.stringify(this.panier));
  }

  prixligne(x){
    x.prixtotal = x.prix*x.quantite
    return x.prixtotal
  }

  prixPanier(){
    let sum = 0;
    this.panier.forEach(element => {
      sum += (element.prix*element.quantite)
    });
    return sum;
  }
  // getListArticleFroSession(){
  //   this.message = sessionStorage.getItem('panier');
  //   this.tab = JSON.parse(this.message);
  // }

  // getListArticleFroSessionBis(){
  //   this.message = sessionStorage.getItem('panierbis');
  //   this.panier = JSON.parse(this.message);
  //   console.log(this.panier);
    
  // }

}
