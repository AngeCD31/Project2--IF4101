import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminPrincipalComponent } from './admin-principal/admin-principal.component';
import { ClientPrincipalComponent } from './client-principal/client-principal.component';
import { AssistantPrincipalComponent } from './assistant-principal/assistant-principal.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Parking Login' }
  },
  {
    path: 'admin-principal',
    component: AdminPrincipalComponent,
    data: { title: 'Parking Admin' }
  },
  {
    path: 'client-principal',
    component: ClientPrincipalComponent,
    data: { title: 'Parking Client' }
  },
  {
    path: 'assistant-principal',
    component: AssistantPrincipalComponent,
    data: { title: 'Parking Assistant' }
  },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPrincipalComponent,
    ClientPrincipalComponent,
    AssistantPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
