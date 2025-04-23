import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { TutorHomeComponent } from './tutor-home/tutor-home.component';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { TutorMyAnsComponent } from './tutor-my-ans/tutor-my-ans.component';

const routes: Routes = [
  {
    path: '', component: TutorDashboardComponent, children:
      [
        { path: 'home', component: TutorHomeComponent },
        { path: 'profile', component: TutorProfileComponent },
        { path: 'my-answer', component: TutorMyAnsComponent },
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
