import { Component, OnInit } from '@angular/core';
import { BpmConnectionApplication, BpmService, BpmWorkItem, WorkItemFilter } from 'ng-bpm';
import { environment } from '../../environments/environment';
import { ApplicationStateService } from '../application-state.service';
import { NavTab } from '../core/core-types';

@Component({
  selector: 'dxp-page-work-item-list',
  templateUrl: './page-work-item-list.component.html',
  styleUrls: ['./page-work-item-list.component.css']
})
export class PageWorkItemListComponent implements OnInit {
  private applicationConnection: BpmConnectionApplication;
  public workItems: BpmWorkItem[];
  private server = environment.url;
  private tenant = environment.tenant;
  private application = environment.application;

  constructor(
    private bpmService: BpmService,
    private applicationStateService: ApplicationStateService
  ) { }

  ngOnInit() {
    this.applicationStateService.activeTab = NavTab.Tasks;
    this.applicationConnection = new BpmConnectionApplication(this.server, this.tenant, this.application);
    this.getWorkItemList();
  }

  private getWorkItemList() {

    console.log('getWorkItemList');
    this.bpmService
      .getWorkItemList(this.applicationConnection, WorkItemFilter.AllWorkItems)
      .subscribe((result: any) => {
        console.log('result', result);
        this.workItems = result;
      });
  }

}
