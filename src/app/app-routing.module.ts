import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './components/employe/employe.component';
import { EmployeProfileComponent } from './employe-profile/employe-profile.component';

const routes: Routes = [
  { path: 'employees', component: EmployeComponent }, // Liste des employés
  { path: 'employee/:id', component: EmployeProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
