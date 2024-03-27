import { Component } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-org-view-details',
  templateUrl: './org-view-details.component.html',
  styleUrl: './org-view-details.component.scss'
})
export class OrgViewDetailsComponent {
  orgDetails: any;
  fullName: any;
  constructor(private commonservice: CommonServiceService,private route: ActivatedRoute,) { 
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getorgData(id);
    });
    
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


}
