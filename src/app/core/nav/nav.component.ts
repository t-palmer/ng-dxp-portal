import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../../application-state.service';
import { NavTab } from '../core-types';

@Component({
  selector: 'dxp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public NavTab = NavTab;

  constructor(
    public applicationStateService: ApplicationStateService
  ) { }

  ngOnInit() {
  }
}
