import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { EmployeeService } from '../Service/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {



employees:any;

registerfrom=new FormGroup({
  name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*$')]),
  age :new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
  gender:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]*$')])
 });


constructor(private Eservice:EmployeeService,private router:Router)
{}



  
  doRegister()
{ 
  this.employees=this.registerfrom.value
  console.log(this.employees)
 this.Eservice.postEmp(this.employees).subscribe(data=>{  
console.log(data);
});  

this.router.navigate(["/list"])
}

get name()
{
  return this.registerfrom.get('name') as FormControl
}

get age()
{
  return this.registerfrom.get('age') as FormControl
}
get gender()
{
  return this.registerfrom.get('gender') as FormControl
}

}
