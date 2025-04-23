import { NgFor, SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-my-ques',
  standalone: true,
  imports: [NgFor , SlicePipe],
  templateUrl: './student-my-ques.component.html',
  styleUrl: './student-my-ques.component.scss'
})
export class StudentMyQuesComponent implements OnInit {
  http = inject(HttpClient)
  userDetails:any;
  quesList : any = [];
  selectedQues: any;
  constructor(){
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '');
  }
  ngOnInit(){
    this.http.get('assets/json/studentQuestionsList.json').subscribe((data: any) => {
      console.log(data,'question list');
      this.quesList =  data.questionList.filter((element:any) => {
        return element.studentId == this.userDetails.studentId
      });
      console.log(this.quesList);
      
    })
    this.http.get('assets/json/registeredTutorDetails.json').subscribe((data: any) => {
      console.log(data,'data');
      for(let i =0 ; i<data.userList.length; i++){
        for(let j = 0 ; j<this.quesList.length; j++){
          if(data.userList[i].tutorId == this.quesList[j].tutorId){
            this.quesList[j]['tutorName'] = data.userList[i].firstName + ' ' + data.userList[i].lastName;
          }
        }
      }
      console.log(this.quesList);
      
    })
    console.log('ne',this.quesList);
    

  }
}
