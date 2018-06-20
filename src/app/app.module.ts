import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }  from '@angular/common/http';
import { AutoresComponent } from './components/autores/autores.component';
import { AutorAddComponent } from './components/autores/autor-add/autor-add.component';
import { AutorListComponent } from './components/autores/autor-list/autor-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AutorService } from './services/autor.service';

@NgModule({
  declarations: [
    AppComponent,
    AutoresComponent,
    AutorAddComponent,
    AutorListComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
