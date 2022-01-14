export class Article {
  id: number;
  nom: string;
  prix: number;
  description: string;
  lienImage: string;
  quantite : number;
  prixtotal : number; 

  calcultotal(){
    this.prix*this.quantite; 
  }
}
