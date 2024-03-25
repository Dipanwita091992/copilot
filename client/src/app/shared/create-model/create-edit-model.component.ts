import { Component, Inject } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { CreatePerson } from '../models/create-person';
import { CommonServiceService } from '../../common-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Office } from '../models/office.modal';
import { Organization } from '../models/org';

@Component({
  selector: 'app-create-model',
  templateUrl: './create-edit-model.component.html',
  styleUrl: './create-edit-model.component.scss'
})
export class CreateEditModelComponent {
  isLinear = false;
  formData:any;
  confirmpwd:string='';
  filterOfficelist: any;
  filterOrglist: any;
  action: any;
  isEditMode: boolean = false;
  actionType: string='Create';
  viewType: any = '';
  type: any;
  isModalView: boolean = false;
  managerList: any;

  constructor(private commonservice: CommonServiceService,private route: ActivatedRoute,private location: Location,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
   this.filterOfficelist = data.officeList;
   this.filterOrglist = data.orgList;
   this.viewType = data.type;
   this.type = data.type;
   this.action = data.action;
   this.isModalView = true;
   this.managerList = data.managerList;

}
  ngOnInit(): void {  
    this.route.params.subscribe(params => {
      if(this.isModalView){
        return;
      }
      this.action = params['action'];
      this.filterOfficelist = params['officeList']? JSON.parse(params['officeList']):[];
      this.filterOrglist = params['orgList']?JSON.parse(params['orgList']):[];
      this.type = params['type'];
      if(this.action == 'edit'){
        this.actionType = 'Edit';
        this.isEditMode = true;
        switch (params['type']) {
          case 'people':
            this.viewType = 'Employee';
            break;
          case 'office':
            this.viewType = 'Office';
            break;
          case 'organization':
            this.viewType = 'Organization';
            break;
          default:
            break;
        }
        this.getFormData()

      }
    
    });
    switch (this.type) {
      case 'people':
        this.formData = new CreatePerson();
        break;
      case 'office':
        this.formData = new Office();
        break;
      case 'org':
        this.formData = new Organization();
        break;
      default:
        break;
  
    }
  }
  goToNext(stepper?: MatStepper): void {
    stepper?.next();
  }


  getFormData() {
    let payload;
    switch (this.type) {
      case 'people':
         payload = [{
          action: "people",
          data: [
            {id: "fcab7f8d-0d89-43b0-a11a-12415a4bb9c1"}// to be replaced by routing params as if when nagivate from browse to edit
          ],
          method: "list",
        }]
        break;
      case 'office':
         payload = [{
          action: "offices",
          data: [
            {id: "fcab7f8d-0d89-43b0-a11a-12415a4bb9c1"}// to be replaced by routing params as if when nagivate from browse to edit
          ],
          method: "list",
        }]
        break;
      case 'org':
        payload = [{
          action: "organizations",
          data: [
            {id: "fcab7f8d-0d89-43b0-a11a-12415a4bb9c1"}// to be replaced by routing params as if when nagivate from browse to edit
          ],
          method: "list",
        }]
        break;
      default:
        break;
    } 
  
    this.commonservice.getData(payload).subscribe((res: any) => {
      this.formData = res[0].result.data[0]
     // this.formData.officeId = this.formData.office.id;
    //  this.formData.organizationId = this.formData.organization.id;
    });
  }
  goToPrevious(stepper?: MatStepper): void {
    stepper?.previous();
  }
  submitForm(edit?: boolean) {
    let payload;
    switch (this.type) {
      case 'people':
         payload = [{
          action: "people",
          data: [
            this.formData
          ],
          method: !edit?"insert":"update",
        }]
        break;
      case 'office':
         payload = [{
          action: "offices",
          data: [
            this.formData
          ],
          method: !edit?"insert":"update",
        }]
        break;
      case 'org':
        payload = [{
          action: "organizations",
          data: [
            this.formData
          ],
          method: !edit?"insert":"update",
        }]
        break;
      default:
        break;
    }
 
    this.commonservice.getData(payload).subscribe((res: any) => {
      this.filterOfficelist = res[0].result.data
      this.cancel();
    });
    console.log(this.formData);
  }

  cancel(){
    this.commonservice.cancelEvent.next();
  }
  redirectTo(){
    this.location.back();
  }
}
