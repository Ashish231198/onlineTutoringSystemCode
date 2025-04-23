import { NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-question',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, NgClass ],
  templateUrl: './post-question.component.html',
  styleUrl: './post-question.component.scss'
})
export class PostQuestionComponent {

  subjectData: any = {
    mainCategory: [],
    subCategory: []
  }

  main: any = {
    title: "",
    description: "",
    subjectName: "",
    subjectCategory: "",
    timeline: 0,
    amount: 0,
    subjectId: 0,
    attachment: [],

  }
  questionDetail: any = []
  formData: any;
  pageTitle: string = "Post Your Question"
  submitBtn: string = "Post Your Question Now"
  options: any
  myDate: any;
  minDate!: Date;
  timeline: any = {
    date: null,
    time: null
  }

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    public router: Router,)
{
  }

  ngOnInit() {
    this.minDate = new Date();
   
    this.myDate = new Date
    
  }

  postQuestion() {
    this.successMsg();
  }

  

  handleFileInput(event: any) {
    var count = 0
    this.main['files'] = this.main['files'] && this.main['files'].length > 0 ? this.main['files'] : [];
    for (let i = 0; i < event.target.files.length; i++) {
      const fileSize = event.target.files[i].size
      if (fileSize <= 5000000) {
        event.target.files[i]['uniqueId'] = event.target.files[i].name + new Date().getTime();
        this.main.files.push(event.target.files[i]);
      }
      else {
        count = (count + 1)
        const warnMsg = count + " File is too large, select file less then 5MB"
        console.error('Error', warnMsg)
      }

    };
    this.setImgForSave((cb: any) => {
      event.target.value = ""
    });

  }
  setImgForSave(cb: { (cb: any): void; (cb: any): void; (arg0: boolean): void; }) {
    if (this.main.files) {
      this.formData = new FormData();
      for (let i = 0; i < this.main.files.length; i++) {
        this.formData.append("files", this.main['files'][i]);
      }
      this.formData.append("type", "question")
      // this.formData.append("userId", this.logUser.userId)
      cb(true)
    }
  }

  deleteFiles(img: { fileName: any; }) {
    for (let i = 0; i < this.main.files.length; i++) {
      if (JSON.stringify(this.main.files[i]) === JSON.stringify(img))
        this.main['files'].splice(i, 1)
    }
    if (!img.fileName)
      this.setImgForSave((cb: any) => { });
  }

  

  successMsg(msg?: any) {
    Swal.fire({
      icon: 'success',
      title: 'Success!!!',
      html: '<h3>"Question Uploaded Successfully"<h3> <br> <h4>We are finding the right tutor for you as per your requirement. Please wait for a few seconds, you are just one step away to connect with one of the best expert.</h4>',
      confirmButtonText: '<i class="fa fa-thumbs-o-up"></i> OK'
    })

  }

}
