import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();


  tab = [] as any;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    let tmp = new Article();
    tmp.id = this.article.id;
    tmp.marque = this.article.marque;
    tmp.prix = this.article.prix;
    this.tab.push(tmp);
  }

}
