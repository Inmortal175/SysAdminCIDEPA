import { Injectable } from '@angular/core';

//servicio de recoleccion de deudas a pagar
@Injectable({
  providedIn: 'root'
})
export class DeudasToPayService {
  public DeudasToPay: any[] = [];
  constructor() {
  }
  setToPay(value : any) {
    this.DeudasToPay = value
  }
}
