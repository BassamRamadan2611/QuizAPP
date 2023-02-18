import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user:any=null

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.user.subscribe((res:any)=>{

      if(res.role){
        this.user =res
      }

    })
    console.log(this.user)

  }


  logout(){
    const model={}
    this.auth.login(model).subscribe(res=>{
      this.user=null
      this.auth.user.next(res)
    })
  }

}
