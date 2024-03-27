import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  activityData: any;
  constructor(private commonservice: CommonServiceService) {
    this.getActivitysData();
    
   }
  getActivitysData() {
    let payload = [{
      action: "actions",
      data: [{ limit: 8, page: 1, start: 0, sort: [{property: "created", direction: "DESC"}], }],
      method: "list",
    }]
 

    this.commonservice.getData(payload).subscribe((res: any) => {
      this.activityData = res[0].result.data;
    });
  }

}
