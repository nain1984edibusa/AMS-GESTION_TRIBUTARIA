import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ORDERS_URL: string = environment.ordersUrl;
  TIPOCONTRIBUYENTE_URL: string = environment.tipoContribuyenteUrl;
  TIPOPROCESO_URL: string = environment.tipoProcesoUrl;
  TIPOPLAN_URL: string = environment.tipoPlanUrl;
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<any> {
    return this.httpClient.get(this.ORDERS_URL).pipe(res => res);
  }

  getFindAllTipoContribuyente(): Observable<any> {
    return this.httpClient.get(this.TIPOCONTRIBUYENTE_URL).pipe(res => res);
  }

  getFindAllTipoProceso(): Observable<any> {
    return this.httpClient.get(this.TIPOPROCESO_URL).pipe(res => res);
  }

  getFindAllTipoPlan(): Observable<any> {
    return this.httpClient.get(this.TIPOPLAN_URL).pipe(res => res);
  }

}
