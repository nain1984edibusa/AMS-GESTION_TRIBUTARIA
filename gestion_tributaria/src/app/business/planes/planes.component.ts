import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlanesService } from './services/planes.service';
import { PlanesInterface, TipoContribuyenteInterface, TipoPlanInterface, TipoProcesoInterface } from './interfaces/planes.interface';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
//import "rxjs/add/operator/map";


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.scss'
})
export default class PlanesComponent implements OnInit {

  ordersList: PlanesInterface[] = [];
  tipoContribuyenteList: TipoContribuyenteInterface[] = [];
  tipoProcesoList: TipoProcesoInterface[] = [];
  tipoPlanList: TipoPlanInterface[] = [];
  planListEmailInscripcion: PlanesInterface[] = [];

  dtOptions: Config = {};
  data: any = [];
  dtTrigger: Subject<any> = new Subject();

  dataTable: any;
  apiData: any;

  loginObj: any = {
    "descripcion_plan": ""
  };

  constructor(private planesService: PlanesService,
    private httpClient: HttpClient
  ) { }


  
  ngOnInit(): void {
    this.getTipoContribuyente()
    this.getTipoProceso()
    this.getTipoPlan()
    //this.getPlanes() 
  }

  getPlanes() {
    debugger
    alert('hola');
    var objDivTributo = $('#divTributo');
    this.planesService.getFindAllPlanInscripcion().subscribe({
      next: (result) => {
        debugger
        console.log(result);
        this.apiData = result;

        this.initializeDataTable();
        objDivTributo.attr("style", "display:;");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  initializeDataTable(): void {
    this.dataTable = $('#example').DataTable({
      data: this.apiData,
      columns: [
        { title: 'RUC', data: 'numeroRuc' },
        { title: 'Razón Social', data: 'razonSocial' },
        { title: 'Periodo', data: 'periodo' },
        { title: 'Base Imponible', data: 'baseImponible' },
        { title: 'Total Patrimonio Neto', data: 'totalPatrimonioNeto' },
        { title: 'Potencial Recaudar', data: 'potencialRecaudar' }
      ],
      language: {
        url: 'https://cdn.datatables.net/plug-ins/2.0.8/i18n/es-ES.json'
      },
    });
  }

  getTributos() {
    this.planesService.findAll().subscribe({
      next: (result) => {
        console.log(result);
        this.ordersList = result;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getTipoContribuyente() {
    this.planesService.getFindAllTipoContribuyente().subscribe({
      next: (result) => {
        this.tipoContribuyenteList = result;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getTipoProceso() {
    this.planesService.getFindAllTipoProceso().subscribe({
      next: (result) => {
        this.tipoProcesoList = result;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  getTipoPlan() {
    this.planesService.getFindAllTipoPlan().subscribe({
      next: (result) => {
        this.tipoPlanList = result;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  // onLogin() {
  //   debugger;
  //   alert('hola');
  //   this.planesService.getFindAllPlanInscripcion().subscribe((res:any)=>{
  //     if(res.result) {
  //       //localStorage.setItem('hotelUser',JSON.stringify(res.data));
  //       //this.router.navigateByUrl('/dashboard');
  //     } else {
  //       alert('Check User Credentials')
  //     }
  //   },
  //   error=> {

  //   })
  // }
  capturar() {

  }
}
