import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from '../people/person/person.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { OrgCellRendererComponent } from './cellRendereCustomComponent';



@NgModule({
  declarations: [PersonComponent,OrgCellRendererComponent],
  imports: [
    CommonModule, SharedModule, BrowserAnimationsModule, AgGridModule,
  ],
  exports: [PersonComponent,OrgCellRendererComponent],
})
export class PeopleModule { }
