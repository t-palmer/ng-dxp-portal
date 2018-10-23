import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BpmModule } from 'ng-bpm';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageWorkItemListComponent } from './page-work-item-list/page-work-item-list.component';
import { PageProcessInstanceListComponent } from './page-process-instance-list/page-process-instance-list.component';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageWorkItemListComponent,
    PageProcessInstanceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BpmModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
