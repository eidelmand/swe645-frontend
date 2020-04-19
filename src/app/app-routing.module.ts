import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyComponent } from './survey/survey.component';
import { SimpleAcknowledgementComponent } from './simple-acknowledgement/simple-acknowledgement.component';
import {StudentInfoComponent} from './student-info/student-info.component';

const routes: Routes = [
    { path: '', component: SurveyComponent },
    { path: 'simple-ack', component: SimpleAcknowledgementComponent },
    { path: 'student-info/:id', component: StudentInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SurveyComponent, SimpleAcknowledgementComponent, StudentInfoComponent];
