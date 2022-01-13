import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  myList: any;
  nom: string;
  min: number;
  max: number;
  a: Article = new Article();
  tab: Array<Article> = new Array<Article>();
  message: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (sessionStorage.getItem("nom_recherche")==""){
      this.getArticle();
    }else{
      this.nom=sessionStorage.getItem("nom_recherche")
      this.searchByNom()
    }
  }

  getArticle() {
    this.http.get('http://localhost:8080/formation/rest/produit').subscribe(
      (response) => {
        this.myList = response;
      },
      (err) => {
        console.log('**********KO');
      }
    );
  }

  searchByNom() {
    this.http
      .get('http://localhost:8080/formation/rest/produit/nom/' + this.nom)
      .subscribe(
        (response) => {
          this.myList = response;
        },
        (err) => {
          console.log('erreur');
        }
      );
  }

  searchByPrix() {
    this.http
      .get(
        'http://localhost:8080/formation/rest/produit/prix/' +
          this.min +
          '/' +
          this.max
      )
      .subscribe(
        (response) => {
          this.myList = response;
        },
        (err) => {
          console.log('erreur');
        }
      );
  }

  add(i) { 
    this.tab = JSON.parse(sessionStorage.getItem('panier'));
    console.log(i);
    let x: Article = this.myList[i];
    let bool = false;
    for (let index = 0; index < this.myList.length; index++) {
      if(this.tab != null && this.tab[index].nom === x.nom) {
        bool = true;
        this.tab[index].quantite ++;
        break;
      }
    }
    if (!bool) {
      x.quantite = 1;
      this.tab.push(x);
    }
    // let x: Article = new Article();
    // x.id = this.a.id;
    // x.nom = this.a.nom;
    // x.prix = this.a.prix;
    // x.description = this.a.description;
    // x.lienImage = this.a.lienImage;
    // console.log(this.a);
    
    let str: string = JSON.stringify(this.tab);
    sessionStorage.setItem('panier', str);
    // let str2: string = JSON.stringify(x);
    // console.log(str2);

    //this.message = sessionStorage.getItem('panier');
  }
}
