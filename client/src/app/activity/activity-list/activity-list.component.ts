import { Component } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { ColDef, GridOptions } from 'ag-grid-community';
import { CustomRendererActivityComponent } from '../custom-renderer-activity/custom-renderer-activity.component';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.scss'
})
export class ActivityListComponent {
  private gridColumnApi: any;
  groupDefaultExpanded = 1;
  color = '#39babf';
  viewType = 'activity';
  components = {
    CustomRendererActivityComponent: CustomRendererActivityComponent,
  }
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
  actionListData: any[] = [];
  countryList: any;
  gridApi: any;
  filterOfficelist: any;
  filterOrglist: any;
  filterEmplist: any;
  filterActionTypelist: any;

  constructor(private commonservice: CommonServiceService) { }
  ngOnInit(): void {
    this.getActivityData();
    this.getFilterDataforOffice();
    this.getFilterDataforOrg();
    this.getFilterDataforEmploees();
    this.getFilterDataforActionTypes();
  }
  getActivityData(payloadArg?: any) {
    let payload;
    if (!payloadArg) {
      payload = [{
        action: "actions",
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
                "property": "created",
                "direction": "DESC"
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
      this.actionListData = res[0].result.data;
    });
  }

  getFilterDataforOffice() {
    let payload = [{
      action: "actions",
      data: [
        { field: "recipient.office_id", label: "recipient.office.name" }
      ],
      method: "filters",
    }]
    this.commonservice.getData(payload).subscribe((res: any) => {
      this.filterOfficelist = res[0].result.data
    });


  }
  getFilterDataforOrg() {
    let payload = [{
      action: "actions",
      data: [
        { field: "recipient.organization_id", label: "recipient.organization.name" }
      ],
      method: "filters",
    }]
    this.commonservice.getData(payload).subscribe((res: any) => {
      this.filterOrglist = res[0].result.data
    });


  }
  getFilterDataforEmploees() {
    let payload = [{
      action: "actions",
      data: [
        { field: "recipient_id", label: ["recipient.firstname", "recipient.lastname"] }
      ],
      method: "filters",
    }]
    this.commonservice.getData(payload).subscribe((res: any) => {
      this.filterEmplist = res[0].result.data
    });


  }
  getFilterDataforActionTypes() {
    let payload = [{
      action: "actions",
      data: [{ field: "type" }]
      ,
      method: "filters",
    }]
    this.commonservice.getData(payload).subscribe((res: any) => {
      this.filterActionTypelist = res[0].result.data
    });


  }

  columnDefs: any[] = [
    { headerName: 'Name/Title', field: 'firstname', width: 350, headerClass: 'custom-header-class', cellRenderer: 'CustomRendererActivityComponent', enableRowGroup: true, rowGroup: true },
    {
      headerName: 'Organization', field: 'organization.name', width: 350, cellRenderer: 'CustomRendererActivityComponent'
    },
    { headerName: 'Office', field: 'office.name', width: 350, cellRenderer: 'CustomRendererActivityComponent' },
    {
      headerName: 'Date', field: 'created', width: 370,cellRenderer: 'CustomRendererActivityComponent'
    },
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
      action: "actions",
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
              "property": "created",
              "direction": "ASC"
            }
          ],
          "filter": value
        }
      ],
      method: "list",
    }]
    this.getActivityData(payload);

  }
  handleActionTypeSelect(val: any) {
    this.filter(val);

  }
  handleActionEmpSelect(val: any) {
    this.filter(val);

  }
  handleActionOrgSelect(val: any) {
    this.filter(val);

  }
  handleActionOfficeSelect(val: any) {
    this.filter(val);

  }
  handleSearch(value: any) {
    this.filter(value);

  }
  nameCellRenderer(params: any) {
    const name = params.data.recipient.firstname + ' ' + params.data.recipient.lastname;
    return `<h4 style="color: ${this.color};margin:0;padding:0;font-weight: 500;font-family: inherit;">${name}</h4>
    <h5 style="margin:0;padding:0;font-size: 12px;font-family: sans-serif;">${params.data.recipient.title}</h5>`;

  }
  orgCellRenderer(params: any) {

    return `  <style>
    .hover-effect:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  </style><h4 class="hover-effect"  style="color: ${this.color};cursor: pointer;;margin:0;padding:0;font-weight: 500;font-family: inherit;">${params.data.recipient.organization.name}</h4>
    </h5>`;
  }
  handleClickOrg(params: any, type: string) {
    console.log(params, type);
  }
  officeCellRenderer(params: any) {
    return `<h4 style="color: ${this.color};margin:0;padding:0;font-weight: 500;font-family: inherit;">${params.data.recipient.office.name}</h4>
    <h5 style="margin:0;padding:0;font-size: 12px;font-family: sans-serif;">${params.data.recipient.office.city},${params.data.recipient.office.country}</h5>`;
  }
  resetFilter() {
    this.getActivityData();
  }
  refreshData(data:any) {
    this.filter(data);
  }


}



