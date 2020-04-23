import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pr-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: []
})
export class GridViewComponent {
  @Input()
  rowData = [];
  @Output()
  updated = new EventEmitter();

  columnDefs: any;
  defaultColDef: any;

  constructor() {

    this.columnDefs = [
      {
        headerName: 'Athlete Details',
        children: [
          {
            headerName: 'Athlete',
            field: 'athlete',
            width: 180,
            filter: 'agTextColumnFilter',
          },
          {
            headerName: 'Age',
            field: 'age',
            width: 90,
            filter: 'agNumberColumnFilter',
          },
          {
            headerName: 'Country',
            field: 'country',
            width: 140,
          },
        ],
      },
      {
        headerName: 'Sports Results',
        children: [
          {
            headerName: 'Sport',
            field: 'sport',
            width: 140,
          },
          {
            headerName: 'Total',
            columnGroupShow: 'closed',
            field: 'total',
            width: 100,
            filter: 'agNumberColumnFilter',
          },
          {
            headerName: 'Gold',
            columnGroupShow: 'open',
            field: 'gold',
            width: 100,
            filter: 'agNumberColumnFilter',
          },
          {
            headerName: 'Silver',
            columnGroupShow: 'open',
            field: 'silver',
            width: 100,
            filter: 'agNumberColumnFilter',
          },
          {
            headerName: 'Bronze',
            columnGroupShow: 'open',
            field: 'bronze',
            width: 100,
            filter: 'agNumberColumnFilter',
          },
        ],
      },
    ];
    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: true,
    };
  }

  onGridReady(params) {
    console.log('==> grid ready event');
    this.updated.next();
  }
}
