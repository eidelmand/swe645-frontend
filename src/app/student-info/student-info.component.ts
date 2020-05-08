//Daniela Eidelman
//Yaron Eidelman
//This program is a student survey. After the survey is completed
//it displays a list of student ids. Clicking on the student id gives their
//information

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student } from '../student';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
    student = new Student(
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

  constructor(private route: ActivatedRoute, private infoService: InfoService) { }

  ngOnInit() {
      this.infoService.getStudent(this.route.snapshot.paramMap.get('id'))
        .subscribe(response => this.student = response);
  }

}
