import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-write-answer',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './write-answer.component.html',
  styleUrl: './write-answer.component.scss'
})
export class WriteAnswerComponent {
  show = true
  main: any = {
    "description": "",
    "attachment": []
  }
  formData: any;
  toastr = inject(ToastrService);

  constructor(){}



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
        this.toastr.error('Error', warnMsg)
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
      this.formData.append("type", "answer")
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
}
