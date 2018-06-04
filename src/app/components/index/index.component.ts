import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TraineeService } from './../../trainee.service';
import { SessionService } from './../../session.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  trainees: any;
  sessions: any;

  constructor(private http: HttpClient, private service: TraineeService, private sessionservice: SessionService) {}

  ngOnInit() {
    this.getTrainees();
    this.getSessions();
  }
  getTrainees() {
    this.service.getTrainees().subscribe(res => {
      this.trainees = res;
    });
  }
  getSessions() {
    this.sessionservice.getSessions().subscribe(res => {
      this.sessions = res;
    });
  }
}
