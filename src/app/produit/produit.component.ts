import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('Test 1');
    this.getArticle();
    console.log('Test 2');
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
}
