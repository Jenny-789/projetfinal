import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientsComponent } from './add-clients/add-clients.component';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ArticleComponent } from './article/article.component';
import { PanierComponent } from './panier/panier.component';
import { AjoutarticleComponent } from './ajoutarticle/ajoutarticle.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientsComponent,
    ClientsComponent,
    LoginComponent,
    MenuComponent,
    ArticleComponent,
    PanierComponent,
    AjoutarticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
