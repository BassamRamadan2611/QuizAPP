import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

userform!:FormGroup
students:any[]=[]
  constructor( private fb:FormBuilder, private authservice:AuthService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createForm();
    this.getStudents()
  }
 
createForm(){
  this.userform = this.fb.group({
    username:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
  })
}
getStudents(){
  this.authservice.getUsers("students").subscribe((res:any)=>{
    this.students=res
  })
}

submit(){
const model ={ 
  username:this.userform.value.username,
  email:this.userform.value.email,
  password:this.userform.value.password,
}
let index = this.students.findIndex(item=> item.email == this.userform.value.email)
if(index !== -1){
  this.toastr.error("  Email is Already Exist","",{
    disableTimeOut:false,
    titleClass:"toastr_title",
    messageClass:"toastr_message",
    timeOut:5000,
    closeButton:true
  })
}
else{
  this.authservice.createUser(model).subscribe(res=>{
this.toastr.success("Registration Sucessfully","",{
  disableTimeOut:false,
  titleClass:"toastr_title",
  messageClass:"toastr_message",
  timeOut:5000,
  closeButton:true
})
this.router.navigate(['/login'])
   
    console.log(res)
  })
  
}


}



}