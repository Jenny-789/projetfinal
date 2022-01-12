import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { Client } from '../model/client.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  client = new Client();

  username: String
  password: String
  message: String
  erreur = 0;
  public isloggedIn: Boolean = false;

  constructor(public authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    this.http.get<Client>("http://localhost:8080/formation/rest/personnes/" + this.username + "/" + this.password).
      subscribe(response => {
        this.client = response;
        if (this.client != null) {
          this.message = this.client.nom + " " + this.client.prenom + " login.ts";
          document.location.assign("http://localhost:4200/accueil"); 
          this.isloggedIn = true;
          
          localStorage.setItem('loggedUser', JSON.stringify(this.client));
          localStorage.setItem('isloggedIn', String(this.isloggedIn));
        } else this.erreur = 1;

      });


  }

}
