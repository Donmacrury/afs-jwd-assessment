import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/mock_data_(2).json';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})


export class CustomersComponent implements OnInit {

  listData: any = (data as any).default;

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.listData);
  }

}
