import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageHomeComponent} from './page-home/page-home.component';
import {PageWorkItemListComponent} from './page-work-item-list/page-work-item-list.component';
import {PageProcessInstanceListComponent} from './page-process-instance-list/page-process-instance-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: 'wilist', component: PageWorkItemListComponent },
  { path: 'pilist', component: PageProcessInstanceListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
