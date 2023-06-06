import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Model/employee/api.response';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Model/employee/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees:any;
data:any;
 constructor(private Eservice:EmployeeService,private r:Router,private ar:ActivatedRoute)
 {}

  ngOnInit(): void 
  {
   let response= this.employees=this.Eservice.getEmp();
  response.subscribe((data=>this.employees=data))

  }


delemp(id:number)
{
 this.Eservice.delemp(id).subscribe(data=> this.employees=data)
alert("Employee Deleted Successfully")
}



}
