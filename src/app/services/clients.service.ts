import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients : Client[]; 
  constructor() { 

   /*  this.clients = [{title : "Mr",nom : "Lambert", prenom :"Jennifer", birthday : new Date("4/10/1994"), adresse : " 15 rue des angular", codePostal : 13530 , ville : "Trets", email : "bidule@gmail.com ", identifiant : "Jenny1234 ", password : "azerty123"},
    {nom : "Toto", prenom :"titi", birthday : new Date("4/10/1989"), adresse : "27 rue des palmiers", codePostal : 13100 , ville : "Aix en provence", email : "chouette@hotamil.fr", identifiant : "toto11", password : "abcde7890"},
  
  ]; */
  
  }
// Retourne la liste de client 
  listeClient(): Client[]{
return this.clients; 

  }

  // Ajoute les clients dans la liste
  ajoutClient(client : Client){
    this.clients.push(client); 

  }
}
