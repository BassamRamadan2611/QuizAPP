import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Auth/services/auth.service';
import { DoctorServiceService } from 'src/app/doctor/services/doctor.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
 subjects:any[]=[]
 user:any ={}
  constructor(private service:DoctorServiceService ,private auth:AuthService,private tostr:ToastrService) { }

  ngOnInit(): void {
    this.getSubjects()
    this.getUserInfo()
  }

  getSubjects(){
    this.service.getAllSubjects().subscribe((res:any)=>{
      this.subjects=res
    })
  }

  getUserInfo(){

    this.auth.getRole().subscribe(res=>{
     this.user=res
    })

  }


  deleteSubject(index:number){

let id = this.subjects[index].id
this.subjects.splice(index,1)
    this.service.deleteSubject(id).subscribe(res=>{
      this.tostr.success("   Subject Deleted Successfully")
    })
  }

}
