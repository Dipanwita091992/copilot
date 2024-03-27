import { Component } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-office-view-details',
  templateUrl: './office-view-details.component.html',
  styleUrl: './office-view-details.component.scss'
})
export class OfficeViewDetailsComponent {  officeDetails: any;
  fullName: any;
  center: any = { lat: 51.678418, lng: 7.809007 };
  zoom = 8;
  constructor(private commonservice: CommonServiceService,private route: ActivatedRoute,private router: Router) { 
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getorgData(id);
    });
  
  }
  getorgData(id?: any) {
    let payload;
 
      payload = [{
        action: "offices",
        data: [
          
            {id: id}
          
        ],
        method: "list",
      }]
  



    this.commonservice.getData(payload).subscribe((res: any) => {
      this.officeDetails = res[0].result.data[0];
      this.fullName = this.officeDetails.manager.firstname + ' ' + this.officeDetails.manager.lastname;
    });
  }
  handleEditClick(id:string){ 
    this.router.navigate(['/main/edit',{ id:id, type: 'office', action: 'edit', }]);
   }


}
