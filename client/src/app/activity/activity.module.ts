import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { CustomRendererActivityComponent } from './custom-renderer-activity/custom-renderer-activity.component';



@NgModule({
  declarations: [ActivityListComponent,CustomRendererActivityComponent],
  imports: [
    CommonModule,SharedModule, BrowserAnimationsModule, AgGridModule,
  ],
  exports:[ActivityListComponent]
})
export class ActivityModule { }
