import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { TutorHomeComponent } from './tutor-home/tutor-home.component';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { TutorMyAnsComponent } from './tutor-my-ans/tutor-my-ans.component';
import { TutorNewQuesComponent } from './tutor-new-ques/tutor-new-ques.component';
import { WriteAnswerComponent } from './write-answer/write-answer.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path: '', component: TutorDashboardComponent, children:
      [
        { path: 'home', component: TutorHomeComponent },
        { path: 'profile', component: TutorProfileComponent },
        { path: 'feedback', component: FeedbackComponent },
        { path: 'my-answer', component: TutorMyAnsComponent },
        { path: 'new-question', component: TutorNewQuesComponent },
        { path: 'write-answer', component: WriteAnswerComponent },
      ]

  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule {
  constructor() {
    console.log('tutor dt');
  }

}
