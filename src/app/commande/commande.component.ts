import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Article } from '../model/article';
import { Commande } from '../model/commande';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css'],
})
export class CommandeComponent implements OnInit {
  // tab: Array<Article> = new Array<Article>();
  // panier: Panier;
  newCommande = new Commande();
  currentDate = new Date();
  count: number;
  panier: Array<Article>;
  prixtttab: number[];
  prixtt = 0;

  message: string;
  constructor(private http: HttpClient, private _router: Router) {}

  ngOnInit(): void {
    // this.getListArticleFroSession();
    this.panier = JSON.parse(localStorage.getItem('panier'));
    console.log(this.panier);
  }

  deletearticle(x) {
    this.panier.splice(x, 1);
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }

  majpanier() {
    localStorage.setItem('panier', JSON.stringify(this.panier));
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
  // getListArticleFroSession(){
  //   this.message = sessionStorage.getItem('panier');
  //   this.tab = JSON.parse(this.message);
  // }

  // getListArticleFroSessionBis(){
  //   this.message = sessionStorage.getItem('panierbis');
  //   this.panier = JSON.parse(this.message);
  //   console.log(this.panier);

  // }

  create() {
    this.newCommande.date = this.currentDate;
    this.newCommande.prixTotal = this.prixPanier();
    this.newCommande.status = 'Validé';
    const body = JSON.stringify(this.newCommande);
    this.http
      .post('http://localhost:8080/formation/rest/commande', body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((response) => {
        console.log('Commande enregistrée');
        this._router.navigate(['validation']);
        // localStorage.clear();
      });
  }
}
