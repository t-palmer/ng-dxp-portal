import { Injectable } from '@angular/core';
import { NavTab } from './core/core-types';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {
  public activeTab = NavTab.Home;

  constructor() { }
}
