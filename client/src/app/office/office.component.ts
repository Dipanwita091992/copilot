import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrl: './office.component.scss'
})
export class OfficeComponent {private gridApi: any;
  private gridColumnApi: any;
  groupDefaultExpanded = 1;
  color = '#39babf';
  viewType = 'office';
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
  officeData: any[]= [];
  countryList: any;

  constructor(private commonservice: CommonServiceService) { }
  ngOnInit(): void {
    this.getofficeData();
    this.getFilterDataforManager();
  }
  getofficeData(payloadArg?: any) {
    let payload;
    if (!payloadArg) {
      payload = [{
        action: "offices",
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
      this.officeData = res[0].result.data;
    });
  }

  getFilterDataforManager(){
    let payload = [{
      action: "offices",
      data: [
        {field: "country", label: 'country'}
      ],
      method: "filters",
    }]
    this.commonservice.getData(payload).subscribe((res: any) => {
      this.countryList = res[0].result.data
    });
   

  }

  columnDefs: any[] = [
    { headerName: 'Name', field: 'name', width: 550, headerClass: 'custom-header-class', cellRenderer: this.nameCellRenderer.bind(this), enableRowGroup: true, rowGroup: true },
    {
      headerName: 'Address', field: 'address', width: 550, cellRenderer: this.addressCellRenderer.bind(this)
    },
    { headerName: 'Headcount', field: 'headcount', width: 350, cellRenderer: this.headcountRenderer.bind(this) },
    
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
      action: "offices",
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
          "filter": value
        }
      ],
      method: "list",
    }]
    this.getofficeData(payload);

  }
  handleCountrySelect(val: any) {
    this.filter(val);

  }
  handleSearch(value: any) {
    this.filter(value);

  }
  nameCellRenderer(params: any) {

    return `<h4 style="color: ${this.color};margin:0;padding:0;font-weight: 500;font-family: inherit;">${params.data.name}</h4>`

  }
  addressCellRenderer(params: any) {

    return `  <style>
    .hover-effect:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  </style><h4 class="hover-effect"  style="cursor: pointer;;margin:0;padding:0;font-weight: 500;font-family: inherit;">${params.data.city} ${params.data.country}</h4>
    <h5 style="margin:0;padding:0;font-size: 12px;font-family: sans-serif;"><span>${params.data.address}</span>
    </h5>`;
  }
  handleClickOrg(params: any, type: string) {
    console.log(params, type);
  }
  headcountRenderer(params: any) {
    return `<h4 style="color: ${this.color};margin:0;padding:0;font-size: 14px;font-family: inherit;">${params.data.headcount} employees</h4>`;
  }
  resetFilter() {
    this.getofficeData();
  }
  refreshData(data:any) {
    this.filter(data);
  }

}

