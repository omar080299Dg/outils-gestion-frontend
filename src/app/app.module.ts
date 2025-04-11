import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeComponent } from "./components/employe/employe.component";
import { EmModalComponent } from './components/em-modal/em-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { EmployeProfileComponent } from './components/employe-profile/employe-profile.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UpdateClientComponent } from './update-client/update-client.component';
import { RapportComponent } from './rapport/rapport.component';
import { MaintenancePopupComponent } from './maintenance-popup/maintenance-popup.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeProfileComponent,
    MaintenancePopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeComponent,
    EmModalComponent,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
    MatTooltipModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
