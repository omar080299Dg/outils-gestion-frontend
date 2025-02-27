import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './components/employe/employe.component';

const routes: Routes = [
  { path: 'employees', component: EmployeComponent }, // Liste des employés

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
