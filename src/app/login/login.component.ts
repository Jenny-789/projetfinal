import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  client = new Client();
  erreur = 0;
    constructor(private authService : AuthService,
      private router: Router) { }
  
    ngOnInit(): void {
    }
  
    
    // Connexion Login 
    onLoggedin(){
      console.log(this.client); 
      let isValidUser: Boolean = this.authService.SignIn(this.client); // Déclare une variable local avec let qui recoit le résultat de la méthode signIn dans la classe auth.service
      if (isValidUser) // Si valideUser est true on continue sinon on met une alerte 
        this.router.navigate(['/']);
      else
        //alert('Login ou mot de passe incorrecte!');
        this.erreur = 1; 
                }
}
