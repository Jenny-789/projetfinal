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
  constructor() {}

  ngOnInit(): void {
    this.tab = JSON.parse(localStorage.getItem('loggedUser'));
  }
}
