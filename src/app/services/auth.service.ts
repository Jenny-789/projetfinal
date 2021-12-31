import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService { // Pour les méthodes métiers d'authentification

  users: User[] = [{"username":"Client1","password":"123","roles":['Client']},
  {"username":"Lambert","password":"123","roles":['Commercial']} ];
  
  public loggedUser:string; // pour stocker l'utilisateur connecté. une fois identifier on le stock dans cette variable 
  public isloggedIn: Boolean = false; // si l'utilisateur est connecter il est a true sinon false 
  public roles:string[]; // Permet de stocker les roles de l'utilisateur connecté 
  
   
  constructor(private router: Router) { }




// Verification identifiant + mdp correct
  SignIn(user :User):Boolean{
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
  }

  // Déconnexion 
  logout() { 
    this.isloggedIn= false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login; 
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username :string){    
    this.users.forEach((curUser) => {
      if( curUser.username == username) {
          this.roles = curUser.roles;
      }
    });
  }


  /************************************************/
   /*  isCommercial():Boolean{
    if (!this.roles) //Pourra servir pour la parti ERP pour définir qui a quel role et qui pourra se connecter 
       return false;
    return (this.roles.indexOf('commercial') >-1);
   
  } */

}

  



  