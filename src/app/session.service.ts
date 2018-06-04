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
export class SessionService {
  result: any;
  constructor(private http: HttpClient) { }

  addSession(dateTime, location, termFor) {
    const uri = 'http://localhost:4000/Sessions/add';
    const obj = {
      dateTime: dateTime,
      location: location,
      termFor: termFor
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
        console.log('Done'));
  }
  getSessions() {
    const uri = 'http://localhost:4000/Sessions';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editSession(id) {
    const uri = 'http://localhost:4000/Sessions/edit' + id;
    return this
            .http.get(uri)
            .map(res => {
              return res;
            });
  }
}
