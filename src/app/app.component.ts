import { Component, OnInit } from '@angular/core';
import { Article } from './model/article';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  panier: Array<Article> = [];

  activation = "active";

  ngOnInit() {
    //sessionStorage.clear()
    if (localStorage.getItem('panier') == null) {
      this.createPanier();
    }
   
      
  }
  createPanier() {

    localStorage.setItem("panier", JSON.stringify(this.panier));
    console
  }
  
}