package com.employee.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.DeleteExchange;

import com.employee.app.entity.EmployeeEntity;
import com.employee.app.repo.EmployeeRepo;
import com.employee.app.service.EmployeeService;

import ch.qos.logback.core.model.Model;
@CrossOrigin(origins = "*")
@RestController
public class EmployeeController 
{

	@Autowired
	private EmployeeService service;
//	private EmployeeRepo repo;
	
@PostMapping("/employees")
public void saveEmployee(@RequestBody EmployeeEntity employee)
{
service.saveEmployee(employee);	
}

@GetMapping("/employees")
public List<EmployeeEntity> getAllEmployee()
{
	return service.getemployeelist();
}



@GetMapping("/employees/{id}")
public EmployeeEntity getEmployeeByid(@PathVariable("id")  int id)
{
return service.getEmployeeById(id);
}



@PutMapping("/employees/{id}")
public EmployeeEntity editEmployeeById(@PathVariable("id")int id,  @RequestBody EmployeeEntity employee)
{  
return  service.updateEmployeeById(id,employee);

}


@DeleteMapping("/employees/{id}")
public List<EmployeeEntity> deleteEmployee(@PathVariable("id")int id)
{
service.getdelEmployee(id);
return service.getemployeelist();
}
}
