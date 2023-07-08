import { Component,OnInit, OnDestroy  } from '@angular/core';
import { InsertedSuccess, Read, login } from '../login';

import { Subscription } from 'rxjs';
import { LoginService} from '../login.service';

@Component({
  selector: 'app-logindelete',
  templateUrl: './logindelete.component.html',
  styleUrls: ['./logindelete.component.css']
})
export class LogindeleteComponent  implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: LoginService) {}
  username: String = '';
  GotResult: Boolean = false;
  UpdatedUser:login = {
    username: '',
    password:''
  };
  Results = [];
  Read(username: String) {
    this.Service.Read(username).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Delete(username: String) {
    this.Service.Delete(username).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
}