import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';

import { OngletServiceComponent } from './onglet-service/onglet-service.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CGVComponent } from './Footer/cgv/cgv.component';
import { MentionsComponent } from './Footer/mentions/mentions.component';
import { PreAccueilComponent } from './pre-accueil/pre-accueil.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [

  { path: "", redirectTo:"accueil", pathMatch:"full" },
  { path: 'login', component: LoginComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'service', component: OngletServiceComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'cgv', component: CGVComponent },
  { path: 'mentions', component: MentionsComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'JYTA', component: PreAccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
