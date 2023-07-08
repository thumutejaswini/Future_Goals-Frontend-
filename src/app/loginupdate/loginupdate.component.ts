import { Component,OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs';
import { InsertedSuccess, Read, login } from '../login';
@Component({
  selector: 'app-loginupdate',
  templateUrl: './loginupdate.component.html',
  styleUrls: ['./loginupdate.component.css']
})
export class LoginupdateComponent implements OnInit {
  ngOnInit(): void {}
  Subscription: Subscription = new Subscription();
  constructor(private Service:LoginService) {}
  username: String = '';
  GotResult: Boolean = false;
  UpdatedUser : login = {
    username: '',
    password: '',
    
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
  Update(username: String, Details: login) {
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
