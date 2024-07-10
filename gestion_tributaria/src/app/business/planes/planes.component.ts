import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlanesService } from './services/planes.service';
import { PlanesInterface, TipoContribuyenteInterface, TipoPlanInterface, TipoProcesoInterface, ParametroInterface } from './interfaces/planes.interface';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
//import "rxjs/add/operator/map";


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, DataTablesModule, FormsModule],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.scss'
})
export default class PlanesComponent implements OnInit {

  ordersList: PlanesInterface[] = [];
  tipoContribuyenteList: TipoContribuyenteInterface[] = [];
  tipoProcesoList: TipoProcesoInterface[] = [];
  tipoPlanList: TipoPlanInterface[] = [];
  tipoPlanListSelect: TipoPlanInterface[] = [];
  planListEmailInscripcion: PlanesInterface[] = [];
  materialidad: ParametroInterface[] = [];

  dtOptions: Config = {};
  data: any = [];
  dtTrigger: Subject<any> = new Subject();

  dataTable: any;
  apiData: any;

  planObj: any = {
    "tipo_proceso_id": 0,
    "tipo_plan_id": 0,
    "tipo_contribuyente_id": 0,
    "descripcion_plan": "",
    "valor_desde": "",
    "valor_hasta": "",
    "checkbox_2018": "",
    "checkbox_2019": ""
  };

  constructor(private planesService: PlanesService,
    private httpClient: HttpClient
  ) { }



  ngOnInit(): void {
    this.getTipoContribuyente()
    this.getTipoProceso()
    this.getTipoPlan()
    //this.getParametro()
    this.getParametroId()
    //this.getPlanes() 
  }

  getPlanes() {
    debugger
    alert('hola');
    var objDivTributo = $('#divTributo');
    this.planesService.getFindAllPlanInscripcion(this.planObj).subscribe({
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
        { title: 'Periodo', data: 'anio' },
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

  //this.planesService.getFindAllPlanInscripcion(this.planObj).subscribe({

  onOptionsSelected(value: any) {
    this.tipoPlanListSelect= [];
    console.log("the selected value is " + value);
    this.planObj.tipo_proceso_id = value;
    this.tipoPlanList.forEach(x => {
      if (x.tipoProcesoId == value) {
        this.tipoPlanListSelect.push(x);
      }
    });
  }

  onSelectTipoPlan(value: any) {
    console.log("the selected value is " + value);
    this.planObj.tipo_plan_id = value;
  }
  onSelectTipoContribuyente(value: any) {
    console.log("the selected value is " + value);
    this.planObj.tipo_contribuyente_id = value;
  }


  // onSelect(this.planObj.tipo_proceso_id: any): void {
  //   debugger
  //   console.log(code);
  //   this.tipoPlanList.find(x =>x.tipoProcesoId == code); // con esto ya hemos obtenido las provincias del departamento seleccionado, ahora solo falta ponerlo en la plantilla html.
  // } 
  // getTipoPlanByProcesoId(code: any) {
  //   this.planesService.getFindAllTipoPlan().subscribe({
  //     next: (result) => {
  //       this.tipoPlanList = result;
  //       this.tipoPlanList.find(x =>x.tipoProcesoId == code)
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }


  getParametroId() {
    this.planesService.getFindByParametro(45).subscribe({
      next: (result) => {
        //this.tipoPlanList = result;
        this.planObj.materialidad = result.valorNumerico;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getParametro() {
    debugger
    this.planesService.getFindAllParametro().subscribe({
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
