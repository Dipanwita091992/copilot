import { Component, EventEmitter, Output } from '@angular/core';
import { debounce } from 'rxjs';
import { filter } from '../models/filter';
import { CommonServiceService } from '../../common-service.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  searchText: string = '';
  @Output() searchEvent = new EventEmitter<string>();
  filterList: any = [];


  constructor(private commonService:CommonServiceService) { }

  ngOnInit(): void {
    this.commonService.resetEvent$.subscribe((data: any) => {
      this.searchText = '';
    });
  
  } 
  handleSeachBrowse(e:any) {
   // let timeoutId: any;
   //   clearTimeout(timeoutId);
   // timeoutId = setTimeout(() => {
    let filterObj

    filterObj = new filter('#search', this.searchText);
    this.filterList.push(filterObj);
      this.searchEvent.emit(this.filterList);
   // }, 0);
  }

}
