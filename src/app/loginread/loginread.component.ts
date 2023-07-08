import { Component,OnInit, OnDestroy  } from '@angular/core';
import {
  Read,
 login,
  UniqueConstraintError,
} from '../login';
import { Subscription } from 'rxjs';
import { LoginService} from '../login.service';
@Component({
  selector: 'app-loginread',
  templateUrl: './loginread.component.html',
  styleUrls: ['./loginread.component.css']
})
export class LoginreadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: LoginService) {}
  username: String = '';
  GotResult: Boolean = false;
  
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
}