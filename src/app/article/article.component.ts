import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ActivatedRoute, Router } from '@angular/router';

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

  a: Article = new Article();
  tab: Array<Article> = new Array<Article>();



  id: number;
  article: Article;
  panier: Array<Article>;

message : string;
  constructor(private http: HttpClient , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {    
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.initarticle();
  }

  // getArticle() {
  //   this.http.get('http://localhost:8080/formation/rest/produit').subscribe(
  //     (response) => {
  //       this.myList = response;
  //     },
  //     (err) => {
  //       console.log('**********KO');
  //     }
  //   );
  // }

  // searchByNom() {
  //   this.http
  //     .get('http://localhost:8080/formation/rest/produit/nom/' + this.nom)
  //     .subscribe(
  //       (response) => {
  //         this.myList = response;
  //       },
  //       (err) => {
  //         console.log('erreur');
  //       }
  //     );
  // }
  initarticle() {
    this.http.get<Article>('http://localhost:8080/formation/rest/produit/' + this.id).subscribe(
      (response) => {
        this.article = response;
        console.log(this.article);
        
      },
      (err) => {
        console.log('ID KO');
      }
    );
  }



  addpanier() {
    let trouver = false;
    this.panier = JSON.parse(localStorage.getItem('panier'));
    this.panier.forEach((element) => {
      if (element.id == this.id) {
        element.quantite = element.quantite + this.article.quantite; // pour ajouter dans le panier en + s'il y est déjà 
        trouver = true;
      }
    });
    if (trouver == false) { 
      this.panier.push(this.article); // Si pas dejà dans le panier on le push dedans 
    }
    localStorage.setItem("panier", JSON.stringify(this.panier));
    this.router.navigate(["/", "panier"]);
  }


}
