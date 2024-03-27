import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { OrganizationComponent } from './organization.component';
import { OrgViewDetailsComponent } from './org-view-details/org-view-details.component';
import { CustomRendererOrgComponent } from './custom-renderer-org/custom-renderer-org.component';



@NgModule({
  declarations: [OrganizationComponent,OrgViewDetailsComponent,CustomRendererOrgComponent],
  imports: [
    CommonModule,SharedModule, BrowserAnimationsModule, AgGridModule,
  ],  exports: [OrganizationComponent],
})
export class OrganizationModule { }
