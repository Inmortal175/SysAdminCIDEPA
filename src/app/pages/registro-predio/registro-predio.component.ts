import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Predio } from 'src/app/models/predio';

@Component({
  selector: 'app-registro-predio',
  templateUrl: './registro-predio.component.html',
  styleUrls: ['./registro-predio.component.css']
})
export class RegistroPredioComponent implements AfterViewInit{
  predios: Predio[] = [
    {
      id: 1,
      departamento: '',
      provincia: '',
      distrito: '',
      manzana: 'K',
      lote: '03',
      calle: 'Jr. Las Palmeras',
      sector: 'Sector I',
      propietario_anterior: '',
      comunero: 'Franklin Figueroa Perez',
      created_at: '',
      last_modified: '',
      modified_by: '',
      es_eliminado: false
    },
    {
      id: 2,
      departamento: '',
      provincia: '',
      distrito: '',
      manzana: 'M',
      lote: '05',
      calle: 'Av. Las Flores',
      sector: 'Sector II',
      propietario_anterior: '',
      comunero: 'Frederick Chumpitaxi Mamani ',
      created_at: '',
      last_modified: '',
      modified_by: '',
      es_eliminado: false
    },
    {
      id: 3,
      departamento: '',
      provincia: '',
      distrito: '',
      manzana: 'S',
      lote: '15',
      calle: 'Jr. Javier Prado',
      sector: 'Sector I',
      propietario_anterior: '',
      comunero: 'PALOMINO GARCIA	Frank Cesar Andersson',
      created_at: '',
      last_modified: '',
      modified_by: '',
      es_eliminado: false
    },
    {
      id: 4,
      departamento: '',
      provincia: '',
      distrito: '',
      manzana: '',
      lote: '',
      calle: '',
      sector: '',
      propietario_anterior: '',
      comunero: '',
      created_at: '',
      last_modified: '',
      modified_by: '',
      es_eliminado: false
    },
    {
      id: 5,
      departamento: '',
      provincia: '',
      distrito: '',
      manzana: '',
      lote: '',
      calle: '',
      sector: '',
      propietario_anterior: '',
      comunero: '',
      created_at: '',
      last_modified: '',
      modified_by: '',
      es_eliminado: false
    },
  ]
  displayedColumns: string[] = ['id', 'sector', 'calle', 'manzana', 'lote', 'comunero', 'acciones']
  dataSource = new MatTableDataSource<Predio>(this.predios)
  @ViewChild(MatPaginator) paginador!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginador;
  }

  showDetail(dato:any) {

  }
}
