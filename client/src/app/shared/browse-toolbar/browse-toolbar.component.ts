import { Component, EventEmitter, Input, Output } from '@angular/core';
import { filter } from '../models/filter';
import { Subject } from 'rxjs';
import { CommonServiceService } from '../../common-service.service';

@Component({
  selector: 'app-browse-toolbar',
  templateUrl: './browse-toolbar.component.html',
  styleUrl: './browse-toolbar.component.scss'
})
export class BrowseToolbarComponent {
  @Input() selectedOptionOffice: string = '';
  @Input() selectedOptionOrg: string = '';
  @Input() officeLists: any = [];
  @Input() orgLists: any = [];
  @Input() managerList: any = [];
  @Input() countryList: any = [];
  @Input() actionList: any = [];
  @Input() employeeList: any = [];
  @Input() selectedOptionCountry: string = '';
  @Input() selectedOptionActionType: string = '';
  @Input() selectedOptionEmp: string = '';
  @Input() viewType: string = '';
  @Output() selectedOffice = new EventEmitter<string>();
  @Output() selectedOrg = new EventEmitter<string>();
  @Output() handleManagerSelect = new EventEmitter<string>();
  @Output() handleCountrySelect = new EventEmitter<string>();
  @Output() handleActionTypeSelect = new EventEmitter<string>();
  @Output() handleActionEmpSelect = new EventEmitter<string>();
  @Output() resetFilter = new EventEmitter<string>();
  @Output() refreshData = new EventEmitter<string>();
  @Output() createEvent = new EventEmitter<void>();

  selectedOptionManager: string = '';
  filterList: any = [];


  constructor(private commonService:CommonServiceService) { }
  filterOffice() {
    let filterObj
    if (this.viewType == 'people') {
      if (!this.filterList.find((x: any) => x.property === 'officeId')) {
        filterObj = new filter('officeId', this.selectedOptionOffice);
        this.filterList.push(filterObj);
      } else {
        this.filterList.find((x: any) => x.property === 'officeId').value = this.selectedOptionOffice;
      }
    }
    else {
      if (!this.filterList.find((x: any) => x.property === 'recipient.office_id')) {
        filterObj = new filter('recipient.office_id', this.selectedOptionOffice);
        this.filterList.push(filterObj);
      } else {
        this.filterList.find((x: any) => x.property === 'recipient.office_id').value = this.selectedOptionOffice;

      }
    }
  
    this.selectedOffice.emit(this.filterList);
  }
  filterOrg() {

    let filterObj
    if (this.viewType == 'people') {
      if (!this.filterList.find((x: any) => x.property === 'organizationId')) {
        filterObj = new filter('organizationId', this.selectedOptionOrg);
        this.filterList.push(filterObj);
      } else {
        this.filterList.find((x: any) => x.property === 'organizationId').value = this.selectedOptionOrg;
      }
    } else {
      if (!this.filterList.find((x: any) => x.property === 'recipient.organization_id')) {
        filterObj = new filter('recipient.organization_id', this.selectedOptionOrg);
        this.filterList.push(filterObj);
      } else {
        this.filterList.find((x: any) => x.property === 'recipient.organization_id').value = this.selectedOptionOrg;

      }

    }
    this.selectedOrg.emit(this.filterList);
  }
  filterManager() {
    let filterObj
    if (!this.filterList.find((x: any) => x.property === 'manager_id')) {
      filterObj = new filter('manager_id', this.selectedOptionManager);
      this.filterList.push(filterObj);
    }
    else {
      this.filterList.find((x: any) => x.property === 'manager_id').value = this.selectedOptionManager;
    }


    this.handleManagerSelect.emit(this.filterList);
  }
  filterCountry() {
    let filterObj
    if (!this.filterList.find((x: any) => x.property === 'country')) {
      filterObj = new filter('country', this.selectedOptionCountry);
      this.filterList.push(filterObj);
    }
    else {
      this.filterList.find((x: any) => x.property === 'country').value = this.selectedOptionCountry;
    }
    this.handleCountrySelect.emit(this.filterList);
  }
  filterActions() {
    let filterObj
    if (!this.filterList.find((x: any) => x.property === 'type')) {
      filterObj = new filter('type', this.selectedOptionActionType);
      this.filterList.push(filterObj);
    }
    else {
      this.filterList.find((x: any) => x.property === 'type').value = this.selectedOptionActionType;
    }

    this.handleActionTypeSelect.emit(this.filterList);
  }
  filterEmployees() {
    let filterObj

    if (!this.filterList.find((x: any) => x.property === 'recipient.office_id')) {
      filterObj = new filter('recipient_id', this.selectedOptionEmp);
      this.filterList.push(filterObj);
    }
    else {
      this.filterList.find((x: any) => x.property === 'recipient_id').value = this.selectedOptionEmp;
    }


    this.handleActionEmpSelect.emit(this.filterList);
  }
  handleResetFilter(){
    this.commonService.resetEvent.next();
    this.selectedOptionOffice = '';
    this.selectedOptionOrg = '';
    this.selectedOptionManager = '';
    this.selectedOptionCountry = '';
    this.selectedOptionActionType = '';
    this.selectedOptionEmp = '';
    this.filterList = [];
    this.resetFilter.emit(this.filterList);


  }
  refresh(){
    this.refreshData.emit(this.filterList);

  }
  create(){
    this.createEvent.emit();

  }

}
