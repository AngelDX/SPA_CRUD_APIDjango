import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutorService } from '../../../services/autor.service';
import { Autor } from '../../../models/autor';

@Component({
  selector: 'app-autor-add',
  templateUrl: './autor-add.component.html',
  styleUrls: ['./autor-add.component.css']
})
export class AutorAddComponent implements OnInit {

  constructor(public autorService: AutorService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(autorForm: NgForm){
    console.log(autorForm.value);
    if(autorForm.value.id == null){
      this.autorService.insertAutor(autorForm.value).subscribe((response) => {
        console.log(response);
      });
    }else{
      this.autorService.updateAutor(autorForm.value.id,autorForm.value).subscribe((response) => {
        console.log(response);
      });
    }
    this.resetForm(autorForm);
    //this.toastr.success('Operación realizada con éxito', 'Product Registered');
  }

  resetForm(autorForm?: NgForm){
    if(autorForm != null)
      autorForm.reset();
      this.autorService.selectAutor = new Autor();
  }
  
}
