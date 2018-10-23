import { Component, OnInit } from '@angular/core';
import {BpmConnectionApplication, BpmProcessInstance, BpmService, ProcessInstanceFilter} from 'ng-bpm';
import { environment } from '../../environments/environment';

@Component({
  selector: 'dxp-page-process-instance-list',
  templateUrl: './page-process-instance-list.component.html',
  styleUrls: ['./page-process-instance-list.component.css']
})
export class PageProcessInstanceListComponent implements OnInit {
  private applicationConnection: BpmConnectionApplication;
  public processInstances: BpmProcessInstance[];
  private server = environment.url;
  private tenant = environment.tenant;
  private application = environment.application;

  constructor(
    private bpmService: BpmService
  ) { }

  ngOnInit() {
    this.applicationConnection = new BpmConnectionApplication(this.server, this.tenant, this.application);
    this.getProcessInstanceList();
  }

  private getProcessInstanceList() {

    console.log('getProcessInstanceList');
    this.bpmService
      .getProcessInstanceList(this.applicationConnection, ProcessInstanceFilter.AllProcesses)
      .subscribe((result: any) => {
        console.log('result', result);
        this.processInstances = result;
      });
  }
}
