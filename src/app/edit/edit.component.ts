import { Component,OnInit} from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Model/employee/employee.model';
import { ApiResponse } from '../Model/employee/api.response';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
employees:any;
data:any;

constructor(private Eservice:EmployeeService,private ar:ActivatedRoute ,private r:Router)
{}

ngOnInit(): void {
  let id=this.ar.snapshot.params['id'];
this.Eservice.getUserById(id).subscribe(data=>{
  this.employees=data
})
}

editform=new FormGroup({
 name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*$')]),
 age:new FormControl("",[Validators.required ,Validators.pattern('^[0-9]*$')]),
gender:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]*$')])
})


  updatesubmit()
  {
  this.data=this.editform.value
  this.Eservice.updateEmp(this.employees.id,this.data).subscribe(data =>
  { 
  console.log(data)
  })
  this.r.navigate(["/list"])
}

get name()
{
  return this.editform.get('name') as FormControl
}

get age()
{
  return this.editform.get('age') as FormControl
}

get gender()
{
  return this.editform.get('gender') as FormControl
}

}
