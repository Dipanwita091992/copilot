// org-cell-renderer.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  templateUrl: 'cell-renderer-people.component.html',
  styleUrls: ['cell-renderer-people.component.scss']
  
  
})
export class OrgCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  color: string='#39babf'
   label = 'Managed by '
   manager = ''
  htmlTemplate: string='';
  fullName: string='';
  pictureurl: string='';
 constructor(private router: Router) {    }
  agInit(params: any): void {
    this.params = params;
    if(this.params.colDef.headerName ==="Oraganization"){
      this.htmlTemplate = 'org'
    }if(this.params.colDef.headerName ==="Name/Title"){
      this.fullName = this.params.data.firstname + ' ' + this.params.data.lastname;
      this.htmlTemplate = 'name';
      this.pictureurl = 'http://localhost:3000/'+params.data.picture;
    }
    this.manager = this.params.data.organization.manager.firstname + ' ' + this.params.data.organization.manager.lastname;
  }

  onClick(): void {
    // Handle click event
   // console.log('Organization Name:', this.params.data.organization.name);
   this.router.navigate(['/main/org']);
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
}