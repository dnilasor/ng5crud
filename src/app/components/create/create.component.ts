import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../../trainee.service';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, NgControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Trainee } from './Trainee';
import { Session } from './Session';
import { SessionService } from '../../session.service';

@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule
  ],
})
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Sign Up for Virtual Proctoring Training Session';
  angForm: FormGroup;
  sessions: any;
  trainees: any;
  submitted = false;
  public show = false;


  // tslint:disable-next-line:max-line-length
  constructor(private traineeservice: TraineeService, private fb: FormBuilder, private http: HttpClient, private sessionservice: SessionService) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      session: [['7/10/18'], Validators.required ]
    });
  }
  addTrainee(name, session) {
    this.traineeservice.addTrainee(name, session);
    this.show = !this.show;
  }

  ngOnInit() {
    this.getSessions();

  }
  getSessions() {
    this.sessionservice.getSessions().subscribe(res => {
    this.sessions = res;
    });
  }
  onSubmit(value: string): void {
    console.log('you submitted value ', value);
  }

}
