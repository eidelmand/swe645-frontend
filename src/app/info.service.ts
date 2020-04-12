//Daniela Eidelman
//Yaron Eidelman
//This program is a student survey. After the survey is completed
//it displays a list of student ids. Clicking on the student id gives their
//information

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
    url = "http://35.237.187.164:8080/Backend/StudentResource";

  constructor(private http: HttpClient) { }

  uploadSurvey(data: String){
       return this.http.get(this.url + data);
  }

  getIds(): Observable<String[]>{
      return this.http.get<String[]>(this.url);
  }

  getStudent(id: String): Observable<Student>{
      return this.http.get<Student>(this.url + "?studentid=" + id);
  }
}
