import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeComponent } from "./components/employe/employe.component";
import { EmModalComponent } from './em-modal/em-modal.component';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeComponent,
    EmModalComponent

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
