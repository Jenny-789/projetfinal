import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

constructor (public authService: AuthService, private router : Router) {}

  
  //Si utilisateur pas déjà connecté on le redirige vers login 
  ngOnInit () {
    let isloggedin: string; 
    let loggedUser:string;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin!="true" || !loggedUser) 
        this.router.navigate(['/login']);
    else
     this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }


// Deconnexion. Appel la méthode logout dans auth.service.ts et application dans app.component.html 
  onLogout(){
    this.authService.logout(); 
  }
}