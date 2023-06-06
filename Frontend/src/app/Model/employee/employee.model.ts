export class Employee
{
  id:number;
  name: string;
  age: string;
  gender: string;
  static id: string;

  constructor(id:number,name:string,age:string,gender:string)
  {
    this.id=id;
   this.name=name;
   this.age=age;
   this.gender=gender
  }
}