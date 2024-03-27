import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-renderer-activity',
  templateUrl: './custom-renderer-activity.component.html',
  styleUrl: './custom-renderer-activity.component.scss'
})
export class CustomRendererActivityComponent {
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
    this.personId = this.params.data.recipient.id;
    this.officeId = this.params.data.recipient.office.id;
    this.orgId = this.params.data.recipient.organization.id;
    if(this.params.colDef.headerName ==="Name/Title"){
      this.htmlTemplate = 'name';
      this.pictureurl = 'http://localhost:3000/'+params.data.recipient.picture;
    }if( this.params.colDef.headerName ==="Date"){
      this.htmlTemplate = 'count'; 
      params.data.created = new Date(this.params.data?.created);
    }if(this.params.colDef.headerName ==="Organization"){
      this.htmlTemplate = 'org';
    }if(this.params.colDef.headerName ==="Office"){
      this.htmlTemplate = 'office';
    }
  }

  onClick(type:string): void {
    // Handle click event
   // console.log('Organization Name:', this.params.data.organization.name);
   switch(type){
    case 'name': this.router.navigate(['/main/personView', this.personId]);
    break;
    case 'office': this.router.navigate(['/main/officeView',  this.officeId]);
    break;
    case 'org': this.router.navigate(['/main/orgView',  this.orgId]);
   }
   //this.router.navigate(['/main/orgView']);
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
}

