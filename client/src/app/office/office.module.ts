import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from './office.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { OfficeViewDetailsComponent } from './office-view-details/office-view-details.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CustomRendererOfficeComponent } from './custom-renderer-office/custom-renderer-office.component';

@NgModule({
  declarations: [OfficeComponent,OfficeViewDetailsComponent,CustomRendererOfficeComponent],
  imports: [
    CommonModule,SharedModule, BrowserAnimationsModule, AgGridModule,GoogleMapsModule
 
  ],
  exports: [OfficeComponent]
})
export class OfficeModule { }
