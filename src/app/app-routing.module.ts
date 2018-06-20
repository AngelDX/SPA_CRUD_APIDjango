import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AutoresComponent } from './components/autores/autores.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'autores',component:AutoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
