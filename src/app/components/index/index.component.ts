import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TraineeService } from './../../trainee.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  trainees: any;

  constructor(private http: HttpClient, private service: TraineeService) {}

  ngOnInit() {
    this.getTrainees();
  }
  getTrainees() {
    this.service.getTrainees().subscribe(res => {
      this.trainees = res;
    });
  }
}
