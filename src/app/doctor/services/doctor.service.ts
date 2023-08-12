import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private http:HttpClient) { }

  createSubject(model:any) {
    return this.http.post("https://quiz-app-api-vvmj-8z44z9phd-bassamramadan2611.vercel.app/subjects" ,model)
  }

  updateSubject(model:any , id:number) {
    return this.http.put("https://quiz-app-api-vvmj-8z44z9phd-bassamramadan2611.vercel.app/subjects"+id  ,model)
  }


  getAllSubjects() {
    return this.http.get("https://quiz-app-api-vvmj-8z44z9phd-bassamramadan2611.vercel.app/subjects")
  }
  getSubject(id:number) {
    return this.http.get("https://quiz-app-api-vvmj-8z44z9phd-bassamramadan2611.vercel.app/subjects"+id)
  }


  deleteSubject(id:number) {
    return this.http.delete("https://quiz-app-api-vvmj-8z44z9phd-bassamramadan2611.vercel.app/subjects"+id)
  }

}