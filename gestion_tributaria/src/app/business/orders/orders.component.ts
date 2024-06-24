import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { OrdersInterface, TipoContribuyenteInterface, TipoPlanInterface, TipoProcesoInterface } from './interfaces/orders.interface';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
//import "rxjs/add/operator/map";


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export default class OrdersComponent implements OnInit {

  ordersList: OrdersInterface[] = [];
  tipoContribuyenteList: TipoContribuyenteInterface[] = [];
  tipoProcesoList: TipoProcesoInterface[] = [];
  tipoPlanList: TipoPlanInterface[] = [];

  dtOptions: Config = {};
  data: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private ordersService: OrdersService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    // this.getTipoContribuyente()
    // this.getTipoProceso()
    // this.getTipoPlan()

    this.dtOptions = {
      // ajax: 'http://localhost:8081/api/v1/tributo',
      //ajax: './data.json',
      language: {
        url: 'https://cdn.datatables.net/plug-ins/2.0.8/i18n/es-ES.json'
      },

      pagingType: "full_numbers",
      pageLength: 2
    };

    this.httpClient.get('https://raw.githubusercontent.com/l-lin/angular-datatables/master/demo/src/data/data.json')
    .subscribe((result:any) =>{
      console.log(result);
       this.data = result.data;
       this.dtTrigger.next(result.data);
    })




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

  getTributos() {

    this.ordersService.findAll().subscribe({
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
    this.ordersService.getFindAllTipoContribuyente().subscribe({
      next: (result) => {
        this.tipoContribuyenteList = result;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getTipoProceso() {
    this.ordersService.getFindAllTipoProceso().subscribe({
      next: (result) => {
        this.tipoProcesoList = result;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  getTipoPlan() {
    this.ordersService.getFindAllTipoPlan().subscribe({
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
