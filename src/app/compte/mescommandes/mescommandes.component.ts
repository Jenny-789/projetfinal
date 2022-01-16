import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css'],
})
export class MescommandesComponent implements OnInit {
  tab: any;
  panier: Array<Article>;
  // prixtttab: number[];
  // prixtt = 0;
  status: string = 'validé';
  currentDate = new Date();
  message: string;
  commande: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.tab = JSON.parse(localStorage.getItem('loggedUser'));
    this.panier = JSON.parse(localStorage.getItem('panier'));
    console.log(this.panier);
  }

  majpanier() {
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }

  prixPanier() {
    let sum = 0;
    this.panier.forEach((element) => {
      sum += element.prix * element.quantite;
    });
    return sum;
  }

  numeroCommande() {
    this.commande++;
  }
}
