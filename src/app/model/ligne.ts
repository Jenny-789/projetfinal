import { Article } from "./article";

export class Ligne {

  quantite : number;
  article : Article;
  totLigne: number;

  constructor(a:number, b:Article){
      this.quantite=a;
      this.article=b;
      this.totLigne=this.article.prix*this.quantite;
  }

  getinfo(){
      return this.quantite+" "+", TOTAL : "+this.totLigne;
  }

  getTotLigne() : number {
      return this.totLigne;
  }
}
