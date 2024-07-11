import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  ORDERS_URL: string = environment.ordersUrl;
  TIPOCONTRIBUYENTE_URL: string = environment.tipoContribuyenteUrl;
  TIPOPROCESO_URL: string = environment.tipoProcesoUrl;
  TIPOPLAN_URL: string = environment.tipoPlanUrl;
  PLANEMAILINSCRIPCION_URL: string = environment.planEmailInscripcionUrl;
  PARAMETRO_URL: string = environment.parametroUrl;
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

  getFindAllPlanInscripcion(obj: any): Observable<any> {
    return this.httpClient.get(this.PLANEMAILINSCRIPCION_URL).pipe(res => res);
  }
  
  getFindByNumeroRuc(obj: any): Observable<any> {
    debugger
    return this.httpClient.get(this.PLANEMAILINSCRIPCION_URL + '/' + obj.numeroRuc ).pipe(res => res);
  }

  getFindAllParametro(): Observable<any> {
    return this.httpClient.get(this.PARAMETRO_URL).pipe(res => res);
  }

  getFindByParametro(id:number): Observable<any> {
    return this.httpClient.get(this.PARAMETRO_URL + '/' + id ).pipe(res => res);
  }

  // login(obj: any) {
  //   return this.http.post(this.apiEndPoint + 'Login', obj);
  // }
}
