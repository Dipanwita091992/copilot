import { Component } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-org-view-details',
  templateUrl: './org-view-details.component.html',
  styleUrl: './org-view-details.component.scss'
})
export class OrgViewDetailsComponent {
  orgDetails: any;
  fullName: any;
  managerList: any;
  constructor(private commonservice: CommonServiceService,private route: ActivatedRoute,private router: Router) { 
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getorgData(id);
    });
    this.getFilterDataforManager();
  }
  getorgData(id: string) {
    let payload;
 
      payload = [{
        action: "organizations",
        data: [
          
            {id: id}
          
        ],
        method: "list",
      }]
  



    this.commonservice.getData(payload).subscribe((res: any) => {
      this.orgDetails = res[0].result.data[0];
      this.fullName = this.orgDetails.manager.firstname + ' ' + this.orgDetails.manager.lastname;
    });
  }
  editHandler(id:string){ 
    this.router.navigate(['/main/edit',{ id:id, type: 'org', action: 'edit',managerList: JSON.stringify(this.managerList)}]);
   }
   
   getFilterDataforManager(){
    let payload = [{
      action: "organizations",
      data: [
        {field: "manager_id", label: ["manager.firstname", "manager.lastname"]}
      ],
      method: "filters",
    }]
    this.commonservice.getData(payload).subscribe((res: any) => {
      this.managerList = res[0].result.data
    });
   

  }
  goToEmployeeListForOrg(id: string){
    let data = {
      property: "organizationId",
      value: id
    }
    this.router.navigate(['/main/people'], { queryParams: { data: JSON.stringify(data) }})
  }

}
