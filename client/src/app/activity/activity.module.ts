import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [ActivityListComponent],
  imports: [
    CommonModule,SharedModule, BrowserAnimationsModule, AgGridModule,
  ],
  exports:[ActivityListComponent]
})
export class ActivityModule { }
