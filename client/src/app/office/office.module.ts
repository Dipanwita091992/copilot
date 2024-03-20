import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from './office.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [OfficeComponent],
  imports: [
    CommonModule,SharedModule, BrowserAnimationsModule, AgGridModule,
  ],
  exports: [OfficeComponent]
})
export class OfficeModule { }
