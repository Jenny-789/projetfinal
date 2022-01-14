import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model';

@Component({
  selector: 'app-coordonnees',
  templateUrl: './coordonnees.component.html',
  styleUrls: ['./coordonnees.component.css'],
})
export class CoordonneesComponent implements OnInit {
  email: string;
  username: string;
  adresse: string;
  cp: string;
  ville: string;
  tab: any;

  c = new Client();

  constructor() {}

  ngOnInit(): void {
    this.tab = JSON.parse(localStorage.getItem('loggedUser'));
  }
}
