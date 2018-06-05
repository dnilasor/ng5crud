import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ViewListComponent } from './components/view-list/view-list.component'
import { appRoutes } from './routerConfig';

import { TraineeService } from './trainee.service';
import { SessionService } from './session.service';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    ViewListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TraineeService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
