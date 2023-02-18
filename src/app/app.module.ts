import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Auth/components/login/login.component';

import { RegisterComponent } from './Auth/components/register/register.component';
import { NewExamComponent } from './doctor/components/new-exam/new-exam.component';
import { StudentsComponent } from './doctor/components/students/students.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SubjectsComponent } from './shared/components/subjects/subjects.component';
import { ExamComponent } from './students/components/exam/exam.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AngularMaterialModuleModule } from './shared/MaterialUI/angular-material-module/angular-material-module.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudentsComponent,
    SubjectsComponent,
    ExamComponent,
    NavbarComponent,
    NewExamComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    AngularMaterialModuleModule,
    ToastrModule.forRoot(), 
  ],
  providers: [
   {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
