import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/components/login/login.component';
import { RegisterComponent } from './Auth/components/register/register.component';
import { NewExamComponent } from './doctor/components/new-exam/new-exam.component';
import { StudentsComponent } from './doctor/components/students/students.component';
import { SubjectsComponent } from './shared/components/subjects/subjects.component';
import { ExamComponent } from './students/components/exam/exam.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'students' , component:StudentsComponent},
  {path:'subjects' , component:SubjectsComponent},
  {path:'exam/:id' , component:ExamComponent},
  {path:'new-exam' , component:NewExamComponent},
  {path:'' , redirectTo:'login',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
