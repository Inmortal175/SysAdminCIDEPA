import { Component, ViewChild, OnInit, Renderer2, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Predio } from 'src/app/models/predio';
import Swal from 'sweetalert2';
import { MatStepper } from '@angular/material/stepper';
import { DeudasToPayService } from 'src/app/services/deudas/deudas-to-pay.service';
import { CurrencyPipe } from '@angular/common';
@Component({
    selector: 'app-deudas',
    templateUrl: './deudas.component.html',
    styleUrls: ['./deudas.component.css'],
})
export class DeudasComponent implements OnInit {
    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
    });
    // secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
    isLinear = false;
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
            es_eliminado: false,
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
            es_eliminado: false,
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
            es_eliminado: false,
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
            es_eliminado: false,
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
            es_eliminado: false,
        },
    ];

    PayOtherPerson = false;
    PayOtherSwitch() {
        this.PayOtherPerson = this.PayOtherPerson ? false : true;
    }

    DisacountApply = false;
    DisacountSwith() {
        this.DisacountApply = this.DisacountApply ? false : true;
    }

    displayedColumns: string[] = ['id', 'sector', 'calle', 'manzana', 'lote', 'comunero', 'acciones'];
    dataSource = new MatTableDataSource<Predio>(this.predios);
    @ViewChild(MatPaginator) paginador!: MatPaginator;

    @ViewChild(MatStepper) stepper!: MatStepper;

    @ViewChildren('elementos', { read: ElementRef }) elementos!: QueryList<ElementRef>; //este es el modo correcto de listar los elementos referenciados para DOM

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginador;

        // animacion

        // this.elementos.forEach((elemento) => {
        //   const elemento_span = elemento.nativeElement as HTMLSpanElement;
        //   let starValue = parseInt(elemento_span.getAttribute("data-val")!)
        //   let endValue = this.selectedItems.length

        //   let duracion = Math.floor(intervalo / endValue);
        //   let contador = setInterval(() => {
        //     if (starValue > endValue){
        //       starValue -= 1
        //     }

        //     elemento_span.textContent = starValue.toString();
        //     if (starValue == endValue) {
        //       clearInterval(contador)
        //     }
        //   }, duracion)
        // })
        // console.log(this.elements)
        // this.elements.forEach(x => {
        //   console.log(x.nativeElement)
        // })
    }

    @ViewChildren('items') elements!: QueryList<ElementRef>;

    fg(item: any) {
        console.log(item);
        this.elements.forEach((x) => {
            const ELEMENTO = x.nativeElement as HTMLElement;
            const CHECK_BOX_EL = ELEMENTO.children[0].children[0].children[0].children[0].children[0] as HTMLInputElement;
            console.log(CHECK_BOX_EL);
            CHECK_BOX_EL.setAttribute('value', 'true');
            console.log(CHECK_BOX_EL);
            console.log(this.selectedItems);
        });
    }

    efecto_contador(displaysData: QueryList<ElementRef>) {
        const intervalo = 1500;
        displaysData.forEach((elemento) => {
            const elemento_span = elemento.nativeElement as HTMLSpanElement;
            let starValue = parseFloat(elemento_span.getAttribute('data-val')!);
            const endValue = this.selectedItems.length * 100;
            const duracion = starValue > endValue ? Math.floor(intervalo / starValue) : Math.floor(intervalo / endValue);
            const contador = setInterval(() => {
                if (starValue > endValue) {
                    starValue -= 1;
                } else {
                    starValue += 1;
                }
                elemento_span.textContent = this.Currency.transform(starValue, 'S/. ');
                if (starValue == endValue) {
                    clearInterval(contador);
                    elemento_span.setAttribute('data-val', endValue.toString());
                }
            }, duracion);
        });
    }
    Alert(event: any) {
        // alert("hi")
        console.log(event, 'xd');
    }

    chxd(event: any) {
        this.efecto_contador(this.elementos);
    }
    //constructor
    constructor(
        private _formBuilder: FormBuilder,
        private deudasToPatservice: DeudasToPayService,
        private renderer: Renderer2,
        private elementRef: ElementRef,
        private Currency: CurrencyPipe,
    ) {
        this.selectionForm = this._formBuilder.group({
            selected: [[], Validators.required],
        });
    }
    ngOnInit(): void {}

    PredioSelected(dato: any) {
        const propiedad = this.predios.filter((x) => x.id == dato);
        const manzana = `Manzana: <span style= 'font-weight: lighter;'>${propiedad[0].manzana}</span> `;
        const lote = `Lote: <span style= 'font-weight: lighter;'>${propiedad[0].lote}</span>`;
        const propietario = `Propietario: <span style= 'font-weight: lighter;'>${propiedad[0].comunero}</span>`;
        Swal.fire({
            title: "<h1 style='color: red'>¿Seguro que desea seleccionar el Predio?</h1> <div> " + manzana + lote + '</div> ' + propietario,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Sí, continuar',
            icon: 'question',
            confirmButtonColor: '#28a745',
            cancelButtonColor: 'red',
            cancelButtonText: 'No, cancelar',
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Propiedad Seleccionada con éxito.',
                    timer: 2500,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    toast: true,
                    icon: 'success',
                    text: 'Seleccione las deudas a cobrar.',
                    background: '#32ab4e',
                    color: 'white',
                });
                this.stepper.next();
            } else {
                const Toast = Swal.mixin({
                    timer: 3000,
                    position: 'bottom-end',
                    toast: true,
                    icon: 'error',
                    text: 'Seleccione una propiedad para el cobro de deudas pendientes.',
                    background: '#ee2c3f',
                    color: 'white',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
                Toast.fire('La operación fue cancelada.', '', 'error');
            }
        });
    }

    //muestra informacino del estado de padrón
    showInfoPadron() {
        Swal.fire({
            icon: 'info',
            title: 'Leyenda:',
            html: '<div> <i class="fa-solid fa-circle" style= "color: rgb(11, 184, 20)"></i> Activo  <i class="fa-solid fa-check"></i> : <span style="color: blue">"El propietario ya se encuentra enpadronado"</span> </div> <br> <div>  <i class="fa-solid fa-circle" style="color: red"></i> Inactivo  <i class="fa-solid fa-triangle-exclamation" style="color: orange;" ></i> : <span style="color: blue">"El propietario necesita enpadronarse, ¡urgente!"</span>  </div>',
        });
    }

    ShowServ() {
        console.log(this.deudasToPatservice.DeudasToPay);
    }

    // algoritmo para la seleccion de deudas

    availableItems: string[] = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
        'Item 11',
        'Item 8',
        'Item 9',
        'Item 10',
        'Item 11',
    ];
    selectedItems: string[] = [];

    selectionForm: FormGroup;

    get selected(): any[] {
        return this.selectionForm.get('selected')?.value as any[];
    }

    toggleSelected(item: string): void {
        const isSelected = this.selectedItems.includes(item);
        if (isSelected) {
            this.selectedItems = this.selectedItems.filter((selectedItem) => selectedItem !== item);
            // this.selected.removeAt(this.selectedItems.indexOf(item));
            this.selectionForm.value.selected.splice(this.selectedItems.indexOf(item));
            const orr = this.selectionForm;
            console.log(orr.valid);
        } else {
            this.selectedItems.push(item);
            // this._formBuilder.control(item)
            this.selectionForm.value.selected.push(item);
        }
        console.log(this.selectedItems);
        console.log(this.selected);
        console.log(this.selectionForm.value.selected);
    }

    //animacion de contador
}
