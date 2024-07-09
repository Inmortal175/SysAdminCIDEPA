import { Comunero } from './../../models/comunero';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
// import { Table } from 'primeng/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-registro-propietario',
  templateUrl: './registro-propietario.component.html',
  styleUrls: ['./registro-propietario.component.css'],
})
export class RegistroPropietarioComponent implements AfterViewInit {
  Comuneros: Comunero[] = [
    {
      id: 1,
      surname: 'Quispe Perez',
      name: 'Franklin',
      dni: '77712434',
      celular: '991468569',
    },
    {
      id: 2,
      surname: 'Quispe Perez',
      name: 'Elizabeth',
      dni: '77712434',
      celular: '991468569',
    },
    {
      id: 3,
      surname: 'Figueroa Perez',
      name: 'Franklin',
      dni: '77712434',
      celular: '991468569',
    },
    {
      id: 4,
      surname: 'Figueroa Perez',
      name: 'Franklin',
      dni: '77712434',
      celular: '',
    },
    {
      id: 5,
      surname: 'Figueroa Perez',
      name: 'Franklin',
      dni: '77712434',
      celular: '',
    },
    {
      id: 6,
      surname: 'Figueroa Perez',
      name: 'Franklin',
      dni: '77712434',
      celular: '',
    },
    {
      id: 7,
      surname: 'Figueroa Perez',
      name: 'Franklin',
      dni: '77712434',
      celular: '',
    },
    {
      id: 8,
      surname: 'Figueroa Perez',
      name: 'Franklin',
      dni: '77712434',
      celular: '987346587',
    },
    {
      id: 9,
      surname: 'Figueroa Perez',
      name: 'Franklin',
      dni: '77712434',
      celular: '',
    },
    {
      id: 10,
      surname: 'Figueroa Perez',
      name: 'Franklin',
      dni: '77712434',
      celular: '945638322',
    },
  ];

  //datos para la tabla
  displayedColumns: string[] = ['id', 'surname', 'name', 'dni', 'celular', 'acciones'];
  dataSource = new MatTableDataSource<Comunero>(this.Comuneros);
  @ViewChild(MatPaginator) paginador!: MatPaginator;

  loading = true;

  selectedFile!: File;

  PROPIETARIO: Comunero = {
    id: '',
    surname: '',
    name: '',
    dni: '',
    celular: '',
  };

  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: AuthService,
  ) {
    this.form = this.fb.group({
      name: [''],
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  uploadPhoto() {
    this.userService.uploadProfilePhoto(this.selectedFile).subscribe(
      () => {
        console.log('Foto de perfil cargada exitosamente');
      },
      (error) => {
        console.log('Error al cargar la foto de perfil', error);
      },
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginador;
  }

  showDetail(dato: any) {
    const datoEl = this.Comuneros.filter((x) => x.id == dato);
    console.log(datoEl);
  }
}
