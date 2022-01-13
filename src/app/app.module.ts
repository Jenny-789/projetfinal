import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientsComponent } from './add-clients/add-clients.component';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProfilComponent } from './compte/profil/profil.component';

import { OngletServiceComponent } from './onglet-service/onglet-service.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';

import { CGVComponent } from './Footer/cgv/cgv.component';
import { FooterComponent } from './Footer/footer.component';
import { MentionsComponent } from './Footer/mentions/mentions.component';
import { PreAccueilComponent } from './pre-accueil/pre-accueil.component';
import { SupportComponent } from './support/support.component';
import { ProduitComponent } from './produit/produit.component';
import { CommandeComponent } from './commande/commande.component';


@NgModule({
  declarations: [
    AppComponent,
    AddClientsComponent,
    ClientsComponent,
    LoginComponent,
    MenuComponent,
    ProfilComponent,
    CGVComponent,
    OngletServiceComponent,
    AccueilComponent,
    InscriptionComponent,
    FooterComponent,
    MentionsComponent,
    PreAccueilComponent,
    SupportComponent,
    ProduitComponent,
    CommandeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
