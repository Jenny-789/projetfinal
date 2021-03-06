import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  message: string;
  connecte: string;

  myList: any;
  nom="";

  constructor(public authService: AuthService, private router: Router, private http: HttpClient) { }


  //Si utilisateur pas déjà connecté on le redirige vers login - Permet de passer de false à true à la connexion 
  ngOnInit() {
    let isloggedin: string;
    let loggedUser: string;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin != 'true' || !loggedUser) {
      this.message = '';
      this.connecte = '';
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
      this.connecte = 'Connecté';
    }
  } 

  reRoot() {
    document.location.assign("http://localhost:4200/produit/");
    sessionStorage.setItem("nom_recherche", this.nom);
  }

  recherche() {
    sessionStorage.setItem("nom_recherche", this.nom);
  }

  // Deconnexion. Appel la méthode logout dans auth.service.ts et application dans app.component.html 
  onLogout() {
    this.authService.logout();
  }
}
