import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-renderer-org',
  templateUrl: './custom-renderer-org.component.html',
  styleUrl: './custom-renderer-org.component.scss'
})
export class CustomRendererOrgComponent {
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
    this.personId = this.params.data.manager.id;
    this.orgId = this.params.data.id;
    this.officeId = this.params.data.manager.OfficeId;
    if(this.params.colDef.headerName ==="Manager"){
      this.htmlTemplate = 'manager'
    }if(this.params.colDef.headerName ==="Name"){
      this.fullName = this.params.data.firstname + ' ' + this.params.data.lastname;
      this.htmlTemplate = 'name';
      this.pictureurl = 'http://localhost:3000/'+params.data.picture;
    }if( this.params.colDef.headerName ==="Headcount"){
      this.htmlTemplate = 'count'; 
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
    break;

    case 'count': {
      let data = {
        property: "organizationId",
        value: this.orgId
      }
      this.router.navigate(['/main/people'], { queryParams: { data: JSON.stringify(data) }});
      
    }
    break;
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
