import { Component, OnInit } from '@angular/core';
import { BpmConnectionServer, BpmService } from 'ng-bpm';
import { environment } from '../../environments/environment';
import { ConnectionManagerService, LoginInfo } from '../connection-manager.service';
import { ApplicationStateService } from '../application-state.service';
import { NavTab } from '../core/core-types';

@Component({
  selector: 'dxp-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  public title = 'DXP Portal';
  public loginInfo: LoginInfo;
  public serverInfo: any;
  // URL to the BPM server
  private server = environment.url;
  private serverConnection: BpmConnectionServer;

  // The constructor initializes the services
  constructor(
    private connectionManagerService: ConnectionManagerService,
    private bpmService: BpmService,
    private applicationStateService: ApplicationStateService
  ) { }

  ngOnInit(): void {
    this.applicationStateService.activeTab = NavTab.Home;
//    this.connectToServer();
    this.serverConnection = new BpmConnectionServer(this.server);
    this.getServerStatus();
  }

  private connectToServer() {
    this.connectionManagerService
      .getLoginInfo(this.server)
      .then(
        function(loginInfo: LoginInfo): void {
          this.loginInfo = loginInfo;
          console.log('this.loginInfo', this.loginInfo);
          // Once we have the login info we know the user is logged in.
          // So we can get the list of Tenants from the BPM server
          /*
                    this.bpmService
                      .getTenants(self.serverConnection)
                      .subscribe((result: any) => {
                        self.tenants = result;
                        if (self.tenants.length > 0) {
                          self.selectedTenant = self.tenants[0];
                          self.onTenantChange(self.selectedTenant);
                        }
                      });
                      */
        }
      );
  }

  private getServerStatus() {
    console.log('getServerStatus');
    this.bpmService
      .getServerInfo(this.serverConnection)
      .subscribe((result: any) => {
        console.log('result', result);
        this.serverInfo = result;
      });
  }

}
