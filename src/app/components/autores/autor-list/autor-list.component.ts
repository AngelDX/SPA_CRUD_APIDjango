import { Component, OnInit } from '@angular/core';
import { Autor } from '../../../models/autor';
import { AutorService } from '../../../services/autor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent implements OnInit {
  private autores: Array<Autor> = [];

  constructor(private autorService: AutorService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.getAutores();
  }

  public getAutores(){
    this.autorService.getAutores().subscribe((data: Array<Autor>) => {
      this.autores = data;
      console.log(data);
    });
  }

  onEdit(autor: Autor) {
    this.autorService.selectAutor = Object.assign({}, autor);
    this.router.navigate(["/autoresAdd"]);
    
  }

  onDelete(id: string) {
    if(confirm('¿Estas seguro que deseas elimiar este Profesor?')) {
      this.autorService.deleteAutor(id).subscribe((data: Array<Autor>) => {
        this.getAutores();
        console.log(data);
      });
      this.toastr.warning('Registro eliminado correctamente...', 'Autor Removed');
    }
  }

  onAdd(){
    this.autorService.selectAutor=new Autor();
    this.router.navigate(["/autoresAdd"]);
  }

}
