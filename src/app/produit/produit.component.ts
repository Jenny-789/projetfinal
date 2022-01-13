import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from '../model/article';
import { Ligne } from '../model/ligne';
import { Panier } from '../model/panier';

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
  panier: Panier = new Panier("toto");
  quantite : number;

  nom2: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getArticle();
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
    this.tab = JSON.parse(sessionStorage.getItem('panier')) || new Array<Article>();
    //console.log(i);
    let x: Article = this.myList[i];
    let bool = false;
    if (this.tab.length !== 0) {
      for (let index = 0; index < this.myList.length; index++) {
        if(this.tab != null && this.tab[index].nom === x.nom) {
          bool = true;
          this.tab[index].quantite ++;
          break;
        }
      }
    }
    if (!bool) {
      x.quantite = 1;
      console.log(x);
      
      this.tab.push(x);
      
    }
    let str: string = JSON.stringify(this.tab);
    sessionStorage.setItem('panier', str);
  }

  addbis(i) { 
    let x: Article = this.myList[i];
    let lig :Ligne = new Ligne(this.quantite, x);

    this.panier.add(lig);
    let str: string = JSON.stringify(this.panier);
    sessionStorage.setItem('panierbis', str);
  }

  addTer(form: NgForm){
    console.log(form.value);
    
  }

  addQuart(){
    

    
  }

  // create(){
  //   let art : Article= new Article();
  //   art.id=this.id;
  //   art.marque=this.marque;
  //   art.prix=this.prix;

  //   let lig :Ligne = new Ligne(this.quantite, art);
  //   this.p1.add(lig);
  //   this.getTotal();
  // }
}
