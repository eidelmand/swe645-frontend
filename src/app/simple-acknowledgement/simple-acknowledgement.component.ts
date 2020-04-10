//Daniela Eidelman
//Yaron Eidelman
//This program is a student survey. After the survey is completed
//it displays a list of student ids. Clicking on the student id gives their
//information

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoService } from '../info.service'

@Component({
  selector: 'app-simple-acknowledgement',
  templateUrl: './simple-acknowledgement.component.html',
  styleUrls: ['./simple-acknowledgement.component.css']
})
export class SimpleAcknowledgementComponent implements OnInit {

    ids = [];

  constructor(private route: ActivatedRoute, private router: Router,
                private infoService: InfoService) { }

  ngOnInit() {

      this.infoService.getIds()
        .subscribe(response => this.ids = response);
  }

  onSelect(id){
      this.router.navigate(['/student-info', id]);
  }

}
