import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { OrganizationComponent } from './organization.component';



@NgModule({
  declarations: [OrganizationComponent],
  imports: [
    CommonModule,SharedModule, BrowserAnimationsModule, AgGridModule,
  ],  exports: [OrganizationComponent],
})
export class OrganizationModule { }
