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
  @Input() viewType: string = '';
  @Output() selectedOffice = new EventEmitter<string>();
  @Output() selectedOrg = new EventEmitter<string>();

  constructor() { }
  filterOffice() {
    this.selectedOffice.emit(this.selectedOptionOffice);
  }
  filterOrg() {
    this.selectedOrg.emit(this.selectedOptionOrg);
  }

}
