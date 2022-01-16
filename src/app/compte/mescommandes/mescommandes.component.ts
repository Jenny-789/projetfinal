import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css'],
})
export class MescommandesComponent implements OnInit {
  tab: any;
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
