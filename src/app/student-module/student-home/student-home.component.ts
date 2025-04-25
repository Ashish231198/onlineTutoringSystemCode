import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [NgFor, StarRatingModule],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.scss'
})
export class StudentHomeComponent {

  http = inject(HttpClient);
  totalQues: any;
  userDetails: any;
  newquestion: any;
  tutorList: any;
  constructor() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '');
    this.http.get('assets/json/studentQuestionsList.json').subscribe((data: any) => {
      this.totalQues = data.questionList.filter((element: any) => {
        return element.studentId == this.userDetails.studentId
      });
    })
    this.http.get('assets/json/newQuestionsList.json').subscribe((data: any) => {
       this.newquestion = data.questionList.filter((element: any) => {
        return element.studentId == this.userDetails.studentId
      });
      this.totalQues = [...this.totalQues, ...this.newquestion]
    })
    this.http.get('assets/json/registeredTutorDetails.json').subscribe((data: any) => {
      this.tutorList = data.userList
      this.tutorList.pop();
   })
  }

}
