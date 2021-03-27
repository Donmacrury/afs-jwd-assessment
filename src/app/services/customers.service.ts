import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  stringConverter = (value: any) => {
    if (value === null || value === undefined || typeof value === "string")
      return value;
    return value.toString();
  }
}
