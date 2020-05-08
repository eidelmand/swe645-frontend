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
      console.log(this.url);
       return this.http.get("https://klyycevi0f.execute-api.us-east-1.amazonaws.com/uploadSurvey" + data);
  }

  getIds(): Observable<String[]>{
      return this.http.get<String[]>("https://71i8qhqi8k.execute-api.us-east-1.amazonaws.com/StudentResourceGetIds");
  }

  getStudent(id: String): Observable<Student>{
      return this.http.get<Student>("https://tmfzi3sgpa.execute-api.us-east-1.amazonaws.com/getStudent?id="+ id);
  }
}
