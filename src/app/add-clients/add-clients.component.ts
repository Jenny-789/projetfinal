import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css']
})
export class AddClientsComponent implements OnInit {

  newClient = new Client; 
  message : string; 

  constructor( private clientService : ClientsService) { }

  ngOnInit(): void {

  }

  addClient(){

    //console.log(this.newClient);
    this.clientService.ajoutClient(this.newClient);
    this.message = "Inscription réussi - Bienvenue parmi nous " + this.newClient.prenom ; 

  }

}
