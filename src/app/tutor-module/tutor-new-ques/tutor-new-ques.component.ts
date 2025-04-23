import { NgFor, SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-tutor-new-ques',
  standalone: true,
  imports: [NgFor, SlicePipe],
  templateUrl: './tutor-new-ques.component.html',
  styleUrl: './tutor-new-ques.component.scss'
})
export class TutorNewQuesComponent {
 http = inject(HttpClient)
  userDetails:any;
  quesList : any = [];
  selectedQues: any;
  constructor(){
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '');
  }
  ngOnInit(){
    this.http.get('assets/json/newQuestionsList.json').subscribe((data: any) => {
      console.log(data,'question list');
      this.quesList =  data.questionList.filter((element:any) => {
        return element.subjectId == this.userDetails.subjectId
      });
      
    })
    this.http.get('assets/json/registeredStudentDetails.json').subscribe((data: any) => {
      for(let i =0 ; i<data.userList.length; i++){
        for(let j = 0 ; j<this.quesList.length; j++){
          if(data.userList[i].studentId == this.quesList[j].studentId){
            this.quesList[j]['studentName'] = data.userList[i].firstName + ' ' + data.userList[i].lastName;
          }
        }
      }
     console.log(this.quesList);
      
    })
    

  }
}
