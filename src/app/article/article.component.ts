import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  myList: any;
  nom: string;
  prix: number;
  lienImage: string;
  description: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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

}
