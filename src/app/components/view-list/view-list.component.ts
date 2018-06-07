import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../../trainee.service';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, NgControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Trainee } from './Trainee';
import { Session } from './Session';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})

export class ViewListComponent implements OnInit {

  trainees: any;
  sessions: any;
  selected: any;
  selectedTrainees: any;

  constructor(private http: HttpClient, private service: TraineeService, private sessionservice: SessionService) {
    this.selectedTrainees = this.trainees;
  }

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

  onSelect(date) {
    console.log(date);
    this.selectedTrainees = this.trainees.filter(trainee => trainee.dateTime == date);
  }
}
