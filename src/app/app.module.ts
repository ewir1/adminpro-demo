import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Modulos
import { SharedModule } from './shared/shared.module';

// Temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { ServiceModule } from './services/service.module';
// import { ModalUploadComponent } from './components/modal-upload/modal-upload.component';
import { PipesModule } from './pipes/pipes.module';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
    // ModalUploadComponent,
    // IncrementadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
