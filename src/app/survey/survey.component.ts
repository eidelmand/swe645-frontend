//Daniela Eidelman
//Yaron Eidelman
//This program is a student survey. After the survey is completed
//it displays a list of student ids. Clicking on the student id gives their
//information

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { InfoService } from '../info.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent{
    recommendation = ['Very Likely', 'Likely', 'Unlikely'];
    studentModel = new Student(
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        false,
        false,
        false,
        false,
        false,
        false,
        ''
    );
//    studentModel = new Student("","","","","","","","","","","","",false,false,false,false,false,false);
    data = "";
    params: String = "";

    public ids = [];

    constructor(private router: Router, private infoService: InfoService, private http: HttpClient){
    }

    onSubmit(){
        console.log(this.studentModel);
//"?studentid=hello4&username=a&address=a&city=a&state=a&zip=a&phone=a&email=a&form_url=a&date=a&things+liked=Location&things+liked=Campus&reference=Friends&recommend=Highly+Likely&grad+year=a&comments=d"
        this.params += "?studentid=" + this.studentModel.id + "&";
        this.params += "username=" + this.studentModel.username + "&";
        this.params += "street=" + this.studentModel.street + "&";
        this.params += "city=" + this.studentModel.city + "&";
        this.params += "state=" + this.studentModel.state + "&";
        this.params += "zip=" + this.studentModel.zip + "&";
        this.params += "phone=" + this.studentModel.phone + "&";
        this.params += "email=" + this.studentModel.email + "&";
        this.params += "date=" + this.studentModel.date + "&";
        this.params += "url=" + this.studentModel.url + "&";
        this.params += "recommendation=" + this.studentModel.recommendation + "&";
        this.params += "isStudents=" + this.studentModel.isStudents + "&";
        this.params += "isLocation=" + this.studentModel.isLocation + "&";
        this.params += "isCampus=" + this.studentModel.isCampus + "&";
        this.params += "isAtmosphere=" + this.studentModel.isAtmosphere + "&";
        this.params += "isDorms=" + this.studentModel.isDorms + "&";
        this.params += "isSports=" + this.studentModel.isSports + "&";
        this.params += "reference=" + this.studentModel.reference;

        console.log(this.params);


        this.infoService.uploadSurvey(this.params)
        .subscribe();

        this.router.navigate(['/simple-ack']);
    }


}
