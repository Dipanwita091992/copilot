import { Component } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-view-details',
  templateUrl: './person-view-details.component.html',
  styleUrl: './person-view-details.component.scss'
})
export class PersonViewDetailsComponent {
  personDetails: any;
  fullName: any;
  managerName: string='';
  emoployeeListForOrg: any;
  filterOfficelist: any;
  filterOrglist: any;

  constructor(private commonservice: CommonServiceService,private route: ActivatedRoute,private router: Router) { 
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getorgData(id);
    });
    this.getFilterDataforOffice();
    this.getFilterDataforOrg();
  }
  getorgData(id?: any) {
    let payload;
 
      payload = [{
        action: "people",
        data: [
          
            {id: id}
          
        ],
        method: "list",
      }]
  



    this.commonservice.getData(payload).subscribe((res: any) => {
      this.personDetails = res[0].result.data[0];
      this.fullName = this.personDetails.firstname + ' ' + this.personDetails.lastname;
      this.managerName = this.personDetails.organization.manager.firstname + ' ' + this.personDetails.organization.manager.lastname;
      this.getOrgEmployeesList(this.personDetails.organization.id);
    });
  }
  getFilterDataforOffice(){
    let payload = [{
      action: "people",
      data: [
        {field: "office_id", label: "office.name"}
      ],
      method: "filters",
    }]
    this.commonservice.getData(payload).subscribe((res: any) => {
      this.filterOfficelist = res[0].result.data
    });
   

  }
  getFilterDataforOrg(){
    let payload = [{
      action: "people",
      data: [
        {field: "organization_id", label: "organization.name"}
      ],
      method: "filters",
    }]
    this.commonservice.getData(payload).subscribe((res: any) => {
      this.filterOrglist = res[0].result.data
    });
   

  }

  getOrgEmployeesList(orgId: string){
    let payload = [{
      action: "people",
      data: [
        {
          filter: [  {
            property: "organizationId", value: orgId
          },
          {
            property: "id", value: this.personDetails.id, operator: "!="
          }
        ],
          limit: 10, page: 1, start: 0, sort: [{ property: "lastname", direction: "ASC" }]
        },
       
      
      ],
      method: "list",
    }]
    this.commonservice.getData(payload).subscribe((res: any) => {
      this.emoployeeListForOrg = res[0].result.data;
      console.log(res);
    });
  }
  handleEdit(id: string){
    const officeList = this.filterOfficelist;
    const orgList = this.filterOrglist;
    this.router.navigate(['/main/edit',{id:id, type: 'people', action: 'edit', 
     officeList: JSON.stringify(officeList), orgList: JSON.stringify(orgList)}]);

  }


}

