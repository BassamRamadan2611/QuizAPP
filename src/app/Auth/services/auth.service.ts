import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http:HttpClient) { }

  user = new Subject()
  createUser(model:any) {
    return this.http.post('https://quiz-app-api-vvmj-8z44z9phd-bassamramadan2611.vercel.app/students' , model)
  }

  login(model:any) {
    return this.http.put("https://quiz-app-api-vvmj-8z44z9phd-bassamramadan2611.vercel.app/login/1" , model)
  }

  getUsers(type:string){
    return this.http.get("https://quiz-app-api-vvmj-8z44z9phd-bassamramadan2611.vercel.app/"+type)
  }

  getStudent(id:number) {
    return this.http.get("https://quiz-app-api-vvmj-8z44z9phd-bassamramadan2611.vercel.app/students" +id)
  }
  updateStudent(id:number , model:any) {
    return this.http.put("https://quiz-app-api-vvmj-8z44z9phd-bassamramadan2611.vercel.app/students" +id , model)
  }
  getRole() {
    return this.http.get("https://quiz-app-api-vvmj-8z44z9phd-bassamramadan2611.vercel.app/login/1")
  }
}