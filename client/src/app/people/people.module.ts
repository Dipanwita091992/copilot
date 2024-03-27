import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from '../people/person/person.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { OrgCellRendererComponent } from './cellRendereCustomComponent';
import { MatDialogModule } from '@angular/material/dialog';
import { PersonViewDetailsComponent } from './person-view-details/person-view-details.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HistoryComponent } from '../history/history.component';



@NgModule({
  declarations: [PersonComponent,OrgCellRendererComponent,PersonViewDetailsComponent,HistoryComponent],
  imports: [
    CommonModule, SharedModule, BrowserAnimationsModule, AgGridModule,MatDialogModule,GoogleMapsModule
  ],
  exports: [PersonComponent,OrgCellRendererComponent],
})
export class PeopleModule { }
