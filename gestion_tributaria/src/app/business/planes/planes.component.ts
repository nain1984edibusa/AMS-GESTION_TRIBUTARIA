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

  constructor(private planesService: PlanesService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getTipoContribuyente()
    this.getTipoProceso()
    this.getTipoPlan()
    this.getPlanes() 
    
    this.dtOptions = {
      // ajax: 'http://localhost:8081/api/v1/tributo',
      //ajax: './data.json',
      language: {
        url: 'https://cdn.datatables.net/plug-ins/2.0.8/i18n/es-ES.json'
      },

      pagingType: "full_numbers",
      pageLength: 2
    };

      // this.httpClient.get('http://localhost:8085/api/v1/email-inscripcion')
      // .subscribe((result: any) => {
      //   console.log(result);
      //   // this.data = result.data;
      //   // this.dtTrigger.next(result.data);
      // })

      

     


    // this.httpClient
    // .get('https://raw.githubusercontent.com/l-lin/angular-datatables/master/demo/src/data/data.json')
    // .subscribe({
    //   next: (result) => {
    //     this.users$ = result;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // })



    // this.httpClient
    // .get('')
    // .subscribe(data => {
    //   console.log(data);
    //   this.users$ = data;
    //   this.dtTrigger.next(data);
    // })

    // this.httpClient
    // .get('https://raw.githubusercontent.com/l-lin/angular-datatables/master/demo/src/data/data.json')
    // .subscribe(resp => {
    //   console.log(resp);
    //   this.users$ = resp;
    //   this.dtTrigger.next(resp);
    // })

    // this.httpClient
    //   .get('https://raw.githubusercontent.com/l-lin/angular-datatables/master/demo/src/data/data.json')
    //   .subscribe({
    //     next: (result) => {
    //       this.users$ = result;
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     }
    //   })

    //this.getTributos();



  }


  getPlanes() {
    this.planesService.getFindAllPlanInscripcion().subscribe({
      next: (result) => {
        console.log(result);
        this.apiData = result;

        this.initializeDataTable();
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

  fun(): void {

    alert('hola');
  }






  capturar() {

  }
}
