import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  tab: any;
  currentDate = new Date();
  myList: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.tab = JSON.parse(localStorage.getItem('loggedUser'));
    this.getCommandes();
  }

  getCommandes() {
    this.http
      .get('http://localhost:8080/formation/rest/commande/' + this.tab.nom)
      .subscribe(
        (response) => {
          this.myList = response;
          console.log(this.myList);
        },
        (err) => {
          console.log('**********KO');
        }
      );
  }
}
