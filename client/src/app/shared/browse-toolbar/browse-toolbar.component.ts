import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() countryList :any= [];
  @Input() actionList :any= [];
  @Input() employeeList :any= [];
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
  selectedOptionManager: string = '';

  constructor() { }
  filterOffice() {
    this.selectedOffice.emit(this.selectedOptionOffice);
  }
  filterOrg() {
    this.selectedOrg.emit(this.selectedOptionOrg);
  }
  filterManager() {
    this.handleManagerSelect.emit(this.selectedOptionManager);
  }
  filterCountry() {
    this.handleCountrySelect.emit(this.selectedOptionCountry);
  }
  filterActions() { 
    this.handleActionTypeSelect.emit(this.selectedOptionActionType);
    }
    filterEmployees() {
      this.handleActionEmpSelect.emit(this.selectedOptionEmp);
    }


}
