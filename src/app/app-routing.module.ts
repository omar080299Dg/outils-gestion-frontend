import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './components/employe/employe.component';
import { EmployeProfileComponent } from './components/employe-profile/employe-profile.component';
import { ClientComponent } from './components/client/client.component';
import { ProjetComponent } from './components/projet/projet.component';

const routes: Routes = [
  { path: 'employees', component: EmployeComponent }, // Liste des employés
  { path: 'employee/:id', component: EmployeProfileComponent },
  { path: 'client', component: ClientComponent },
  { path: 'projet', component: ProjetComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
