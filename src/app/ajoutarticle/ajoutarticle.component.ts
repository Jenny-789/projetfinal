import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent implements OnInit {

  article = { id: 0, marque: "", prix: 0 };

  tab = [] as any;

  constructor() { }

  ngOnInit(): void {
  }
  add() {
    let tmp = { id: this.article.id, marque: this.article.marque, prix: this.article.prix };
    this.tab.push(tmp);
  }
}
