import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeComponent } from "./components/employe/employe.component";
import { EmModalComponent } from './em-modal/em-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconSnackBarComponent } from './icon-snack-bar/icon-snack-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { EmployeProfileComponent } from './employe-profile/employe-profile.component';
import { UpdateStatutComponent } from './update-statut/update-statut.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeProfileComponent,

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
    AppRoutingModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
