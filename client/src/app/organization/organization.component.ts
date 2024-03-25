import { Component } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { CommonServiceService } from '../common-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditModelComponent } from '../shared/create-model/create-edit-model.component';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss'
})
export class OrganizationComponent {
  private gridApi: any;
  private gridColumnApi: any;
  groupDefaultExpanded = 1;
  color = '#39babf';
  viewType = 'org';
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
  orgData: any[]= [];
  managerList: any;

  constructor(private commonservice: CommonServiceService,public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getorgData();
    this.getFilterDataforManager();
  }
  getorgData(payloadArg?: any) {
    let payload;
    if (!payloadArg) {
      payload = [{
        action: "organizations",
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
                "property": "name",
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
      this.orgData = res[0].result.data;
    });
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

  columnDefs: any[] = [
    { headerName: 'Name', field: 'name', width: 550, headerClass: 'custom-header-class', cellRenderer: this.nameCellRenderer.bind(this), enableRowGroup: true, rowGroup: true },
    {
      headerName: 'Manager', field: 'manager.id', width: 550, cellRenderer: this.managerCellRenderer.bind(this)
    },
    { headerName: 'Headcount', field: 'headcount', width: 370, cellRenderer: this.headcountRenderer.bind(this) },
    
  ];
  public autoGroupColumnDef: ColDef = {
    minWidth: 200,
  };

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  filter(value: any) {
    let payload = [{
      action: "organizations",
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
              "property": "name",
              "direction": "ASC"
            }
          ],
          "filter":value
        }
      ],
      method: "list",
    }]
    this.getorgData(payload);

  }
  handleManagerSelect(val: any) {
    this.filter(val);

  }
  handleSearch(value: any) {
    this.filter(value);

  }
  nameCellRenderer(params: any) {

    return `<h4 style="color: ${this.color};margin:0;padding:0;font-weight: 500;font-family: inherit;">${params.data.name}</h4>`

  }
  managerCellRenderer(params: any) {
    const label = 'Managed by '
    const manager = params.data.manager?.firstname + ' ' + params.data.manager?.lastname;
    return `  <style>
    .hover-effect:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  </style><h4 class="hover-effect"  style="cursor: pointer;color: ${this.color};margin:0;padding:0;font-weight: 500;font-family: inherit;">${manager}</h4>
    <h5 style="margin:0;padding:0;font-size: 12px;font-family: sans-serif;"><span style="color: ${this.color};">${params.data.manager?.office.name}</span>
    <span>${params.data.manager?.office.city}</span><span>(${params.data.manager?.office.country})</span></h5>`;
  }
  handleClickOrg(params: any, type: string) {
    console.log(params, type);
  }
  headcountRenderer(params: any) {
    return `<h4 style="color: ${this.color};margin:0;padding:0;font-size: 14px;font-family: inherit;">${params.data?.headcount} employees</h4>`;
  }
  resetFilter() {
    this.getorgData();
  }
  refreshData(data:any) {
    this.filter(data);
  }
  addOrg(){
    const type = this.viewType;
    const action = 'Add';
    const managerList = this.managerList;
    this.dialog.open(CreateEditModelComponent, {
     data: { type,action,managerList },
      width: '600px',
      height:'600px'
    });
  }

}
