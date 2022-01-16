import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-validationcommande',
  templateUrl: './validationcommande.component.html',
  styleUrls: ['./validationcommande.component.css'],
})
export class ValidationcommandeComponent implements OnInit {
  panier: Array<Article>;
  prixtttab: number[];
  prixtt = 0;

  message: string;
  constructor() {}

  ngOnInit(): void {
    // this.getListArticleFroSession();
    this.panier = JSON.parse(localStorage.getItem('panier'));
    console.log(this.panier);
    localStorage.removeItem('panier');
  }

  prixligne(x) {
    x.prixtotal = x.prix * x.quantite;
    return x.prixtotal;
  }

  prixPanier() {
    let sum = 0;
    this.panier.forEach((element) => {
      sum += element.prix * element.quantite;
    });
    return sum;
  }
}
