import { Component, OnInit } from '@angular/core';
import { API, Auth } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class Todo {
  constructor (
    public id: string,
    public name: string,
    public description: string,
  ) { }
}

  // const todoDetails = {
  //   name: 'Todo 1',
  //   description: "fix todo's"
  // };

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

  public createForm: FormGroup;

  todos: Array<Todo>;

  constructor(private fb: FormBuilder) { }
  
  async allTodos() {await API.graphql({ query: queries.listTodos })};

  async newTodo() {await API.graphql({ query: mutations.createTodo, variables: {input: this.createForm.value}})};

  public onCreate(todo: Todo) {
    this.newTodo().then(event => {
      this.createForm.reset();
    })
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required]
    })
    // this.allTodos().then(event => {
    //   this.todos = event.items;
    // })
    console.log(this.todos);
  }
  
}
