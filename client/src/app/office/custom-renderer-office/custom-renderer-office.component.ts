import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-renderer-office',
  templateUrl: './custom-renderer-office.component.html',
  styleUrl: './custom-renderer-office.component.scss'
})
export class CustomRendererOfficeComponent {
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
    this.officeId = this.params.data.id;
    if(this.params.colDef.headerName ==="Name"){
      this.htmlTemplate = 'name';
    }if( this.params.colDef.headerName ==="Headcount"){
      this.htmlTemplate = 'count'; 
    }
  }

  onClick(type:string): void {
    // Handle click event
   // console.log('Organization Name:', this.params.data.organization.name);
   switch(type){
    case 'name': this.router.navigate(['/main/personView', this.personId]);
    break;
    case 'office': this.router.navigate(['/main/officeView',  this.officeId]);
   }
   //this.router.navigate(['/main/orgView']);
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
}
