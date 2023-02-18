import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  users:any[]=[]
  type:string="students"
    constructor( private fb:FormBuilder, private authservice:AuthService,private router:Router,private toastr:ToastrService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getUser();
    this.createForm()
  }
  

  changeRole(event:any){
    this.type=event.value;
    this.getUser()


  }

  getUser(){

    this.authservice.getUsers(this.type).subscribe((res:any)=>{
      this.users=res
      console.log(this.users)
    })


  }

 

  createForm(){
    this.loginForm = this.fb.group({
   type:[this.type],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],

    })
  }
 
  submit(){

  let index = this.users.findIndex(item=> item.email == this.loginForm.value.email &&item.password == this.loginForm.value.password)
  if(index == -1){
    this.toastr.error("Email Or Password is incorrect","",{
      disableTimeOut:false,
      titleClass:"toastr_title",
      messageClass:"toastr_message",
      timeOut:5000,
      closeButton:true
    })
  }
  else{
    const model ={ 
      username:this.users[index].username,
    role:this.type,
    userId:this.users[index].id
    }
    this.authservice.login(model).subscribe(res=>{
      this.authservice.user.next(res)
  this.toastr.success("Successfully Login ","",{
    disableTimeOut:false,
    titleClass:"toastr_title",
    messageClass:"toastr_message",
    timeOut:5000,
    closeButton:true
  })
  this.router.navigate(['subjects'])
     
      console.log(res)
    })
    
  }
  
  
  }
  

}
