import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService { // Pour les méthodes métiers d'authentification


  client: Client
  username: string
  password: string
  message: string
  erreur = 0;

  public loggedUser: string; 
  public isloggedIn: Boolean = false; 
  public roles: string[]; 


  constructor(private router: Router, private http: HttpClient) { }


  // Déconnexion 
  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
  }


  


}





