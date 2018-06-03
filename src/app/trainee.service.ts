import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    FormsModule
  ],
})
@Injectable()
export class TraineeService {
  result: any;
  constructor(private http: HttpClient) { }

  addTrainee(name, session) {
    const uri = 'http://localhost:4000/trainees/add';
    const obj = {
      name: name,
      session: session
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
        console.log('Done'));
  }
  getTrainees() {
    const uri = 'http://localhost:4000/trainees';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editTrainee(id) {
    const uri = 'http://localhost:4000/trainees/edit' + id;
    return this
            .http.get(uri)
            .map(res => {
              return res;
            });
  }
}
