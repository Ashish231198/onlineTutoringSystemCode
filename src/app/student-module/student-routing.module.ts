import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { PostQuestionComponent } from './post-question/post-question.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentMyQuesComponent } from './student-my-ques/student-my-ques.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RatingsComponent } from './ratings/ratings.component';

const routes: Routes = [
  {
    path: '', component: StudentDashboardComponent, children:
      [
        { path: 'home', component: StudentHomeComponent },
        { path: 'profile', component: StudentProfileComponent },
        { path: 'post-question', component: PostQuestionComponent },
        { path: 'my-question', component: StudentMyQuesComponent },
        { path: 'feedback', component: FeedbackComponent },
        { path: 'rating', component: RatingsComponent },
      ]

  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
  constructor() {
    console.log('studendt');
  }

}
