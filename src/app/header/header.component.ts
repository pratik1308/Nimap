import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public registerForm:FormGroup;
userobj={
  firstname:"",
  lasttname:"",
  number:"",
  email:"",
  address:"",


}
  constructor(private fb: FormBuilder) { }
  ngOnInit(){
    this.getLatestUser()
  }

  ngOnInit(): void {
  //  console.log(this.fb);
  this.registerForm = this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    number:['',[Validators.required,Validators.minLength(0),Validators.maxLength(10)]],
    address:['',Validators.required]

  });
  }
 registerData(regObject){
   console.log(regObject.value)

 }
 addUser(formObj){
   console.log(formObj)
   this.commonService.createUser().subscribe((response)=>{
     this.getLatestUser()
   })
 }
 getLatestUser(){
   this.commonService.getAllUser().subscribe(response)=>{
     this.allUser = response
   }
 }
 editUser(user){
this.userobj = user
 }
 deleteUser(){
  this.commonService.deleteUser().subscribe((response)=>{
    this.getLatestUser()
  }
 }
}

