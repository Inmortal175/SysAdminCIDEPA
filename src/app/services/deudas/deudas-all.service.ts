import { Injectable } from '@angular/core';
//servicio para obtencion deudas
import { DeudasToPayService } from './deudas-to-pay.service';
@Injectable({
  providedIn: 'root',
})
export class DeudasAllService {
  constructor(private deudasToPayService: DeudasToPayService) {}
}
