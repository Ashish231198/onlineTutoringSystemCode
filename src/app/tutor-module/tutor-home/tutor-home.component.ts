import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-tutor-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tutor-home.component.html',
  styleUrl: './tutor-home.component.scss'
})
export class TutorHomeComponent {
  http = inject(HttpClient);
  totalQues: any;
  userDetails: any;
  newquestion: any;
  studentList: any;
  constructor() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '');
    this.http.get('assets/json/studentQuestionsList.json').subscribe((data: any) => {
      this.totalQues = data.questionList.filter((element: any) => {
        return element.subjectId == this.userDetails.subjectId;
      });
    })
    this.http.get('assets/json/newQuestionsList.json').subscribe((data: any) => {
       this.newquestion = data.questionList.filter((element: any) => {
        return element.subjectId == this.userDetails.subjectId;
      });
      this.totalQues = [...this.totalQues, ...this.newquestion]
    })
    this.http.get('assets/json/registeredStudentDetails.json').subscribe((data: any) => {
      console.log('student list', data);
      
      this.studentList = data.userList
      this.studentList.pop();
   })
  }
}
