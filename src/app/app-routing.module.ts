import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AutoresComponent } from './components/autores/autores.component';
import { AutorListComponent } from './components/autores/autor-list/autor-list.component';
import { AutorAddComponent } from './components/autores/autor-add/autor-add.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'autoresList',component:AutorListComponent},
  {path:'autoresAdd',component:AutorAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
