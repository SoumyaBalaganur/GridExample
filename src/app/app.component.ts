import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit
{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

  export interface PeriodicElement
  {
    name:string;
    position:number;
    weight:number;
    symbol: string;
  }

  const ELEMENT_DATA: PeriodicElement [] =[
  { position: 1, name: 'Acv', weight: 0.787, symbol:'z'},
  { position: 2, name: 'Ahaj', weight: 0.45, symbol:'q'},
  { position: 3, name: 'Fhs', weight: 0.543, symbol:'w'},
  { position: 4, name: 'Hjk', weight: 0.124, symbol:'e'},
  { position: 5, name: 'Hjks', weight: 0.890, symbol:'r'},
  { position: 6, name: 'Uijj', weight: 0.56, symbol:'t'},
  { position: 7, name: 'Yius', weight: 0.890, symbol:'y'},
  { position: 8, name: 'Yuis', weight: 0.567, symbol:'u'},
  { position: 9, name: 'Nus', weight: 0.245, symbol:'i'},
  { position: 10, name: 'Rty', weight: 0.908, symbol:'a'},
  { position: 11, name: 'Ioo', weight: 0.456, symbol:'s'},
  { position: 12, name: 'Qwe', weight: 0.89, symbol:'d'},
  { position: 13, name: 'Yui', weight: 0.787, symbol:'f'},
  { position: 14, name: 'Kls', weight: 0.787, symbol:'h'},
  { position: 15, name: 'Uio', weight: 0.787, symbol:'l'},
  { position: 16, name: 'Nmj', weight: 0.787, symbol:'m'},
  { position: 17, name: 'Iop', weight: 0.787, symbol:'c'}
];


