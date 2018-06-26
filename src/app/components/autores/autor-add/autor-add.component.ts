import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutorService } from '../../../services/autor.service';
import { Autor } from '../../../models/autor';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-autor-add',
  templateUrl: './autor-add.component.html',
  styleUrls: ['./autor-add.component.css']
})
export class AutorAddComponent implements OnInit {

  constructor(public autorService: AutorService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    //this.resetForm();
  }

  onSubmit(autorForm: NgForm){
    console.log(autorForm.value);
    if(autorForm.value.id == null){
      this.autorService.insertAutor(autorForm.value).subscribe((response) => {
        console.log(response);
        this.router.navigate(["/autoresList"]);
      });
    }else{
      this.autorService.updateAutor(autorForm.value.id,autorForm.value).subscribe((response) => {
        console.log(response);
        this.router.navigate(["/autoresList"]);
      });
    }
    this.resetForm(autorForm);
    this.toastr.success('Operación realizada con éxito', 'Autor Registered');
  }

  resetForm(autorForm?: NgForm){
    if(autorForm != null)
      autorForm.reset();
      this.autorService.selectAutor = new Autor();
  }
  
}
