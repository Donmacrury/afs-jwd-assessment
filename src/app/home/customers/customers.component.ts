import { Component, OnInit } from '@angular/core';
import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import * as data from '../../../assets/mock_data_(2).json';

interface ColumnItem {
  name: string;
  sortFn: NzTableSortFn | null;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})


export class CustomersComponent implements OnInit {

  listData: any = (data as any).default;

  columnsList: ColumnItem[] = [
    {
      name: 'First Name',
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: any, b: any) => a.first_name.localeCompare(b.first_name)
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.listData);
  }

}
