import { Component,OnInit, OnDestroy  } from '@angular/core';
import {
  InsertedSuccess,
 login,
  UniqueConstraintError,
} from '../login';
import { Subscription } from 'rxjs';
import { LoginService} from '../login.service';
@Component({
  selector: 'app-logincreate',
  templateUrl: './logincreate.component.html',
  styleUrls: ['./logincreate.component.css']
})
export class LogincreateComponent implements OnInit, OnDestroy {
  constructor(private Service: LoginService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: login  = {
    username: '',
    password: ''


  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.username} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.username} Login Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
