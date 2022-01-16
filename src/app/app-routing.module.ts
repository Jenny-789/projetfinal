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
import { SupportComponent } from './support/support.component';
import { ProduitComponent } from './produit/produit.component';
import { CommandeComponent } from './commande/commande.component';
import { ProfilComponent } from './compte/profil/profil.component';
import { CoordonneesComponent } from './compte/coordonnees/coordonnees.component';
import { ArticleComponent } from './article/article.component';
import { ValidationcommandeComponent } from './validationcommande/validationcommande.component';
import { MescommandesComponent } from './compte/mescommandes/mescommandes.component';
import { AproposComponent } from './apropos/apropos.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'service', component: OngletServiceComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'cgv', component: CGVComponent },
  { path: 'mentions', component: MentionsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'JYTA', component: PreAccueilComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'coordonnees', component: CoordonneesComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'validation', component: ValidationcommandeComponent },
  { path: 'mescommandes', component: MescommandesComponent },
  { path: 'apropos', component: AproposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
