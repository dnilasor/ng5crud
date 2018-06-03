import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../../trainee.service';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, NgControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Trainee } from './Trainee';
import { Session } from './Session';

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

  trainee_in_progress: Trainee;
  submitted = false;


  constructor(private traineeservice: TraineeService, private fb: FormBuilder) {
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
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value ', value);
  }

}
