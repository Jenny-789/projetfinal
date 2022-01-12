import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService { // Pour les méthodes métiers d'authentification

  /* users: User[] = [{"username":"Client1","password":"123","roles":['Client']},
  {"username":"Lambert","password":"123","roles":['Commercial']} ];
   */

  client: Client
  username: string
  password: string
  message: string
  public loggedUser: string; // pour stocker l'utilisateur connecté. une fois identifier on le stock dans cette variable 
  public isloggedIn: Boolean = false; // si l'utilisateur est connecter il est a true sinon false 
  public roles: string[]; // Permet de stocker les roles de l'utilisateur connecté 


  constructor(private router: Router, private http: HttpClient) { }

  SignIn(client: Client): Boolean {
    let validUser: Boolean = false;
    this.http.get<Client>("http://localhost:8080/formation/rest/personnes/" + this.username + "/" + this.password).
      subscribe(response => {
        this.client = response;
        if (this.client != null) {
          validUser = true;
          this.loggedUser = client.username;
          this.isloggedIn = true;

          localStorage.setItem('loggedUser', this.loggedUser);
          localStorage.setItem('isloggedIn', String(this.isloggedIn));
        }
      });
    return validUser;

  }

  // Déconnexion 
  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    //this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
  }



  //***********Code version 1 avec  users en local *************/
  // Verification identifiant + mdp correct
  /*   SignIn(user :User):Boolean{
      let validUser: Boolean = false;
      this.users.forEach((curUser) => {
      if(user.username=== curUser.username && user.password==curUser.password) {
          validUser = true;
          this.loggedUser = curUser.username;
          this.isloggedIn = true;
          this.roles = curUser.roles;
          localStorage.setItem('loggedUser',this.loggedUser);
          localStorage.setItem('isloggedIn',String(this.isloggedIn));
        }
      });
        return validUser;
    } */

  /**************ERP*************************/
  /*  isCommercial():Boolean{
   if (!this.roles) //Pourra servir pour la parti ERP pour définir qui a quel role et qui pourra se connecter 
      return false;
   return (this.roles.indexOf('commercial') >-1);
  
 } */


  /*  
   setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }
  
  getUserRoles(username: string) {
       this.users.forEach((curUser) => {
         if (curUser.username == username) {
           this.roles = curUser.roles;
         }
       }); }*/


}





