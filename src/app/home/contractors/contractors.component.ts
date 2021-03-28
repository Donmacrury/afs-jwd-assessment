import { Component, OnInit } from '@angular/core';
import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';

// export class Todo {
//   constructor (
//     public id: string,
//     public name: string,
//     public description: string,
//   ) { }
// }

  const todoDetails = {
    name: 'Todo 1',
    description: "fix todo's"
  };

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent implements OnInit {
  // id: string;
  // name: string;
  // description: string;
  // todo = new Todo('', '', '');

  constructor() { }
  
  async allTodos() {await API.graphql({ query: queries.listTodos })};

  async newTodo() {await API.graphql({ query: mutations.createTodo, variables: {input: todoDetails}})};

  // const newTodo = await API.graphql({ query: mutations.createTodo, variables: {input: todoDetails}});

  ngOnInit() {
    this.allTodos()
    console.log(this.allTodos);
  }
  
}
