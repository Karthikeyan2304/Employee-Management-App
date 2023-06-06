import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ApiResponse } from '../Model/employee/api.response';
import{Observable} from 'rxjs'
import { Employee } from '../Model/employee/employee.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) 
  { }
baseUrl:string='http://localhost:8080/employees';

public getEmp():Observable<ApiResponse>
{
 return this.http.get<ApiResponse>(this.baseUrl);
}

//  getEmpById(id:number):Observable<ApiResponse>
// {
//   return this.http.get<ApiResponse>('http://localhost:8080/employees/'+id);
// }

postEmp(employees:any)
 {
  return  this.http.post('http://localhost:8080/employees',employees,{responseType:'text' as 'json'}); 
 }





 // Get User by Id - Read

getUserById(id: number):Observable<ApiResponse>
{
return this.http.get<ApiResponse>(`http://localhost:8080/employees/${id}`)
}



 updateEmp(id?:number,employees?:any):Observable<any>
 {
 return this.http.put<any>('http://localhost:8080/employees/'+id,employees)
}


delemp(id:number)
{
  return this.http.delete('http://localhost:8080/employees/'+id);
  
}
}

