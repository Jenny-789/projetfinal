import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

 
  clients : Client[];
  constructor(private clientService : ClientsService) {
   this.clients = clientService.listeClient();
   
   }

  ngOnInit(): void {
  }

}
