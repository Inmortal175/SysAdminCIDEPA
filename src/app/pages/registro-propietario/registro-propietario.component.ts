import { Comunero } from './../../models/comunero';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service';
// import { Table } from 'primeng/table';

@Component({
  selector: 'app-registro-propietario',
  templateUrl: './registro-propietario.component.html',
  styleUrls: ['./registro-propietario.component.css']
})
export class RegistroPropietarioComponent {
  Comuneros: Comunero[] = [
    {
      id: 1,
      surname: "Quispe Perez",
      name: "Franklin",
      dni: "77712434",
      celular:"991468569"
    },
    {
      id: 2,
      surname: "Quispe Perez",
      name: "Elizabeth",
      dni: "77712434",
      celular:"991468569"
    },
    {
      id: 3,
      surname: "Figueroa Perez",
      name: "Franklin",
      dni: "77712434",
      celular:"991468569"
    },
    {
      id: 4,
      surname: "Figueroa Perez",
      name: "Franklin",
      dni: "77712434",
      celular:""
    },
  ];

    loading: boolean = true;

  activityValues: number[] = [0, 100];

  first = 0;

  rows = 10;

  selectedFile!: File;

  PROPIETARIO: Comunero = {
    id: "",
    surname: "",
    name: "",
    dni: "",
    celular:""
  };

  form!: FormGroup;
  constructor(private fb: FormBuilder, private userService : AuthService) {
    this.form = this.fb.group({
      name : ['']
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }

  uploadPhoto() {
    this.userService.uploadProfilePhoto(this.selectedFile)
      .subscribe(
        () => {
          console.log('Foto de perfil cargada exitosamente');
        },
        error => {
          console.log('Error al cargar la foto de perfil', error);
        }
      );
  }

  next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.Comuneros ? this.first === this.Comuneros.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.Comuneros ? this.first === 0 : true;
    }

  show(text: any) {
    this.PROPIETARIO = this.Comuneros.filter((com) =>{ return com.id == text})[0]
  }

}
