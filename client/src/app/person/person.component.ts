import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions } from 'ag-grid-community';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent implements OnInit {
  private gridApi: any;
  private gridColumnApi: any;
  groupDefaultExpanded =1;
  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      filter: true,
      
    },
    groupDisplayType: 'groupRows',
      rowGroupPanelShow: 'always',
      pivotPanelShow: 'always'
  }
  peopleData: any;
  constructor(private commonservice: CommonServiceService) { } 
  ngOnInit(): void {
    this.getpeopleData()
  }
  getpeopleData(payloadArg?: any) {
    let payload;
    if(!payloadArg){
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
    }else{
       payload = payloadArg;
    }
  
 

    this.commonservice.getEventsData(payload).subscribe((res: any) => {
      this.peopleData = res[0].result.data;
    });
  }

  columnDefs:any[] = [
    { headerName: 'Name/Title', field: 'firstname',headerClass: 'custom-header-class', enableRowGroup: true,rowGroup: true},
    { headerName: 'Oraganization', field: 'organization.name', },
    { headerName: 'Office', field: 'office.name' },
    { headerName: 'Email', field: 'email' }
  ];
  public autoGroupColumnDef: ColDef = {
    minWidth: 200,
  };

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  filter(){
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
                  "property": "officeId",
                  "value": "38905470-accb-4905-8091-8418f6ea8ed9"
              }
          ]
      }
      ],
      method: "list",
    }]
    this.getpeopleData(payload);

  }

}
