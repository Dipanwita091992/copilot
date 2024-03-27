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
  personId: string='';
  orgId: string='';
  officeId: string='';
 constructor(private router: Router) {    }
  agInit(params: any): void {
    this.params = params;
    this.personId = this.params.data.id;
    this.orgId = this.params.data.organization.id;
    this.officeId = this.params.data.office.id;
    if(this.params.colDef.headerName ==="Oraganization"){
      this.htmlTemplate = 'org'
    }if(this.params.colDef.headerName ==="Name/Title"){
      this.fullName = this.params.data.firstname + ' ' + this.params.data.lastname;
      this.htmlTemplate = 'name';
      this.pictureurl = 'http://localhost:3000/'+params.data.picture;
    }if( this.params.colDef.headerName ==="Office"){
      this.htmlTemplate = 'office'; 
    }
    this.manager = this.params.data?.organization?.manager?.firstname + ' ' + this.params.data?.organization?.manager?.lastname;
  }

  onClick(type:string): void {
    // Handle click event
   // console.log('Organization Name:', this.params.data.organization.name);
   switch(type){
    case 'org': this.router.navigate(['/main/orgView', this.orgId]);
    break;
    case 'name': this.router.navigate(['/main/personView', this.personId]);
    break;
    case 'office': this.router.navigate(['/main/officeView',  this.officeId]);
   }
   //this.router.navigate(['/main/orgView']);
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
  onClickTitle(id: string){
    this.router.navigate(['/main/personView', id]);
  }
}