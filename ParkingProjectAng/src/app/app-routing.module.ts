import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPrincipalComponent } from './admin-principal/admin-principal.component';
import { AssistantPrincipalComponent } from './assistant-principal/assistant-principal.component';
import { ClientPrincipalComponent } from './client-principal/client-principal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'admin-principal', component: AdminPrincipalComponent},
  {path:'client-principal', component: ClientPrincipalComponent},
  {path:'assistant-principal', component: AssistantPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
