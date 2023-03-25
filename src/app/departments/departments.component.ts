import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  Department: { Id: Number; Name: string}[] = [];
  addDepartment() {
    this.Department.push(
    { Id: 1, Name: 'IT'} ,
    { Id: 2, Name: 'HR'},
    { Id: 3, Name: 'Sales'});
  }

  ngOnInit(): void {
    this.addDepartment();
  }
}


