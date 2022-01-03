import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientsComponent } from './add-clients/add-clients.component';
import { ArticleComponent } from './article/article.component';
import { AjoutarticleComponent } from './ajoutarticle/ajoutarticle.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: "", redirectTo:"inscription", pathMatch:"full" },
  { path: 'login', component: LoginComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'inscription', component: AddClientsComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'ajoutarticle', component: AjoutarticleComponent },
  { path: 'panier', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
