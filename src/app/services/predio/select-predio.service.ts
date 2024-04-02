import { PredioSelected } from './../../models/predio-selected';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectPredioService {

  public predio_seleccionado!: PredioSelected;

  constructor() { }

  getPredioSeleccionado() {
    return this.predio_seleccionado
  }

  UpdatePredioSelected(predio : PredioSelected) {
    this.predio_seleccionado = predio
  }
}
