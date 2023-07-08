import { Component,OnInit } from '@angular/core';
import { CRUDService } from '../crud.service';
import { Subscription } from 'rxjs';
import { InsertedSuccess, Read, StudentDetails } from '../su';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  ngOnInit(): void {}
  Subscription: Subscription = new Subscription();
  constructor(private Service: CRUDService) {}
  username: String = '';
  GotResult: Boolean = false;
  UpdatedUser : StudentDetails = {
    username: '',
    suggestion: '',
    quires: '',
    experience: '',
    rating: '',
  
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Results = [];
  Read(username: String) {
    this.Service.Read(username).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
  }
  Update(username: String, Details: StudentDetails) {
    this.Service.Update(username, Details).subscribe({
      next: (Data:any) => {
        console.log(Data);
        
      },
      error: (err:any) => {
        console.log(err);
      },
    });
}
}
