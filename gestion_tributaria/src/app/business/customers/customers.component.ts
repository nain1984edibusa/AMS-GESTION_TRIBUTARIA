import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})


export  default class CustomersComponent {

  dataTable: any;
  apiData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      this.apiData = data;
      this.initializeDataTable();
    });
  }

  initializeDataTable(): void {

    this.dataTable = $('#example').DataTable({
      data: this.apiData,
      columns: [
        { title: 'Id', data: 'id' },
        { title: 'Title', data: 'title' },
        { title: 'Body', data: 'body' }
      ],

      language: {
        url: 'https://cdn.datatables.net/plug-ins/2.0.8/i18n/es-ES.json'
      },
    });
  }

  ngOnDestroy(): void {
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }

}
