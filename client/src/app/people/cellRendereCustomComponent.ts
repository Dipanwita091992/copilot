// org-cell-renderer.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  template: `
  <style>
  .hover-effect:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style><h4 class="hover-effect"  style="cursor: pointer;color:{{color}};margin:0;padding:0;font-weight: 500;font-family: inherit;" (click)="onClick()">{{params.data.organization.name}}</h4>
  <h5 style="margin:0;padding:0;font-size: 12px;font-family: sans-serif;">{{label}} <span style="color: {{this.color}};">{{manager}}</span></h5>
  `
  
  
})
export class OrgCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  color: string='#39babf'
   label = 'Managed by '
   manager = ''
 constructor(private router: Router) {    }
  agInit(params: any): void {
    this.params = params;
    this.manager = this.params.data.organization.manager.firstname + ' ' + this.params.data.organization.manager.lastname;
  }

  onClick(): void {
    // Handle click event
   // console.log('Organization Name:', this.params.data.organization.name);
   this.router.navigate(['/main/org']);
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
}