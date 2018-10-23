import { Component, OnInit } from '@angular/core';
import { ConnectionManagerService, LoginInfo } from './connection-manager.service';
import { BpmConnectionServer, BpmService } from 'ng-bpm';
import { environment } from '../environments/environment';

@Component({
  selector: 'dxp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-dxp-portal';

  public loginInfo: LoginInfo;
  public serverInfo: any;
  // URL to the BPM server
  private server = environment.url;
  private serverConnection: BpmConnectionServer;

  // The constructor initializes the services
  constructor(
    private connectionManagerService: ConnectionManagerService,
    private bpmService: BpmService
  ) { }

  ngOnInit(): void {
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
