import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions } from 'ag-grid-community';
import { CommonServiceService } from '../../common-service.service';
import { Person } from '../../shared/models/person';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent implements OnInit {
  private gridApi: any;
  private gridColumnApi: any;
  groupDefaultExpanded = 1;
  color = '#39babf';
  viewType = 'people';
  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      filter: true,

    },
    groupDisplayType: 'groupRows',
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always',
    rowHeight: 50,
    getRowStyle: function (params?: any) {
      if (params.node.rowIndex % 2 !== 0) {
        return { background: 'rgb(239 238 238)' };
      } else {

      }
      return undefined; // Add a return statement to handle the case when the condition is not met.
    },
  }
  peopleData: Person[]= [];
  filterOfficelist: any;
  filterOrglist: any;
  constructor(private commonservice: CommonServiceService) { }
  ngOnInit(): void {
    this.getpeopleData();
    this.getFilterDataforOffice();
    this.getFilterDataforOrg();
  }
  getpeopleData(payloadArg?: any) {
    let payload;
    if (!payloadArg) {
      payload = [{
        action: "people",
        data: [
          {
            page: 1,
            start: 0,
            limit: 25,
            group: {
              property: null,
              direction: "ASC"
            },
            sort: [
              {
                "property": "lastname",
                "direction": "ASC"
              }
            ]
          }
        ],
        method: "list",
      }]
    } else {
      payload = payloadArg;
    }



    this.commonservice.getData(payload).subscribe((res: any) => {
      this.peopleData = res[0].result.data;
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

  columnDefs: any[] = [
    { headerName: 'Name/Title', field: 'firstname', width: 350, headerClass: 'custom-header-class', cellRenderer: this.nameCellRenderer.bind(this), enableRowGroup: true, rowGroup: true },
    {
      headerName: 'Oraganization', field: 'organization.name', width: 350, cellRenderer: this.orgCellRenderer.bind(this)
    },
    { headerName: 'Office', field: 'office.name', width: 350, cellRenderer: this.officeCellRenderer.bind(this) },
    { headerName: 'Email', field: 'email', width: 400, cellRenderer: this.contactCellRenderer.bind(this) }
  ];
  public autoGroupColumnDef: ColDef = {
    minWidth: 200,
  };

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  filter(value: any, type: string) {
    let payload = [{
      action: "people",
      data: [
        {
          "page": 1,
          "start": 0,
          "limit": 25,
          "group": {
            "property": null,
            "direction": "ASC"
          },
          "sort": [
            {
              "property": "lastname",
              "direction": "ASC"
            }
          ],
          "filter": [
            {
              "property": type,
              "value": value
            }
          ]
        }
      ],
      method: "list",
    }]
    this.getpeopleData(payload);

  }
  handleOfficeSelect(val: any) {
    this.filter(val, 'officeId');

  }
  handleSearch(value: any) {
    this.filter(value, '#search');

  }
  nameCellRenderer(params: any) {

    let fullName = params.data.firstname + ' ' + params.data.lastname;
    //return params.data.firstname + ' ' + params.data.lastname +'uuu';
    return `<h4 style="color: ${this.color};margin:0;padding:0;font-weight: 500;font-family: inherit;">${fullName}</h4>
    <h5 style="margin:0;padding:0;font-size: 12px;font-family: sans-serif;">${params.data.title}</h5>`;
  }
  orgCellRenderer(params: any) {
    const label = 'Managed by '
    const manager = params.data.organization.manager.firstname + ' ' + params.data.organization.manager.lastname;
    return `  <style>
    .hover-effect:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  </style><h4 class="hover-effect"  style="cursor: pointer;color: ${this.color};margin:0;padding:0;font-weight: 500;font-family: inherit;">${params.data.organization.name}</h4>
    <h5 style="margin:0;padding:0;font-size: 12px;font-family: sans-serif;">${label} <span style="color: ${this.color};">${manager}<span></h5>`;
  }
  handleClickOrg(params: any, type: string) {
    console.log(params, type);
  }
  officeCellRenderer(params: any) {
    return `<h4 style="color: ${this.color};margin:0;padding:0;font-weight: 500;font-family: inherit;">${params.data.office.name}</h4>
    <h5 style="margin:0;padding:0;font-size: 12px;font-family: sans-serif;">${params.data.office.city},${params.data.office.country}</h5>`;
  }
  contactCellRenderer(params: any) {
    return `<h4 style="margin:0;padding:0;font-size: 14px;font-family: inherit;">${params.data.email}</h4>
       <h5 style="margin:0;padding:0;font-size: 12px;font-family: sans-serif;">${params.data.phone}</h5>`;
  }
  handleOrgSelect(val: any) {
    this.filter(val, 'organizationId');
  }

}