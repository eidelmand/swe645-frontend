import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { SimpleAcknowledgementComponent } from './simple-acknowledgement/simple-acknowledgement.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { NoSuchStudentComponent } from './no-such-student/no-such-student.component';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SimpleAcknowledgementComponent,
    routingComponents,
    StudentInfoComponent,
    NoSuchStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
