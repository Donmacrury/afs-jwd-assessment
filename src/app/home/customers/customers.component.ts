import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableSortFn, NzTableSortOrder, NzTableFilterList } from 'ng-zorro-antd/table';
import * as data from '../../../assets/mock_data_(2).json';
import { CustomersService } from '../../services/customers.service';

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  filteredList: NzTableFilterList | null;
  filterFn: NzTableFilterFn | null;
  filterMultiple?: boolean;
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
      sortOrder: null,
      sortFn: (a: any, b: any) => a.first_name.localeCompare(b.first_name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: false,
      filteredList: [],
      filterFn: null,
    },
    {
      name: 'Last Name',
      sortOrder: null,
      sortFn: null,
      sortDirections: [null],
      filteredList: null,
      filterFn: null,
      filterMultiple: false
    },
    {
      name: 'Car',
      sortOrder: null,
      sortDirections: [null],
      sortFn: null,
      filteredList: [null],
      filterFn: null,
      filterMultiple: false
    },
    {
      name: 'No Claims Bonus',
      sortOrder: null,
      sortDirections: [null],
      sortFn: null,
      filterMultiple: false,
      filteredList: [
        { text: 'True', value: true },
        { text: 'False', value: false }
      ],
      filterFn: (no_claims: boolean, item: any) => item.no_claims.toString().indexOf(no_claims) !== -1
      
      // TODO: use the CustomersService to format no_claims boolean to string
      // filterFn: (no_claims: boolean, item: any) => item.no_claims.stringConverter().indexOf(no_claims) !== -1
    },
    {
      name: 'Gender',
      sortOrder: null,
      sortDirections: [null],
      sortFn: null,
      filteredList: [
        { text: 'Female', value: 'Female'},
        { text: 'Male', value: 'Male' },
        { text: 'Other', value: 'Other' }
      ],
      filterFn: (gender: string, item: any) => item.gender.indexOf(gender) !== -1,
      filterMultiple: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.listData);
  }

}
