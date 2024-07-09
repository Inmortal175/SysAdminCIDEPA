import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Calle } from 'src/app/models/calle';

@Component({
    selector: 'app-registro-calle',
    templateUrl: './registro-calle.component.html',
    styleUrls: ['./registro-calle.component.css'],
})
export class RegistroCalleComponent implements AfterViewInit {
    Calles: Calle[] = [
        {
            id: 1,
            nombre: 'Las flores',
            calle_abreviado: 'Av.',
            calle_completo: 'Avenida',
            created_at: new Date(),
            es_eliminado: false,
        },
        {
            id: 2,
            nombre: 'Javier Prado',
            calle_abreviado: 'Jr.',
            calle_completo: 'Jirón',
            created_at: new Date(),
            es_eliminado: true,
        },
        {
            id: 3,
            nombre: 'María Parado de Bellido',
            calle_abreviado: 'Jr.',
            calle_completo: 'Jirón',
            created_at: new Date(),
            es_eliminado: true,
        },
        {
            id: 4,
            nombre: 'Las palmeras',
            calle_abreviado: 'Bq.',
            calle_completo: 'Bloque',
            created_at: new Date(),
            es_eliminado: true,
        },
        {
            id: 5,
            nombre: 'Andrés avelino Cáceres',
            calle_abreviado: 'Av.',
            calle_completo: 'Avenida',
            created_at: new Date(),
            es_eliminado: true,
        },
    ];
    displayedColumns: string[] = ['id', 'calle_completo', 'calle_abreviado', 'nombre', 'acciones'];
    dataSource = new MatTableDataSource<Calle>(this.Calles);
    @ViewChild(MatPaginator) paginador!: MatPaginator;

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginador;
    }

    showDetail(dato: any) {}
}
