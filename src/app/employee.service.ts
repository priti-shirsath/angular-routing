import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';
import { EMPLOYEE } from './mockemployee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEE);
    return employees;
  }

  getEmployee(Id: number): Observable<Employee> {
    const employee = EMPLOYEE.find(h => h.Id === Id)!;
    return of(employee);
  }
}
