import { Component, EventEmitter, Output } from '@angular/core';
import { debounce } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  searchText: string = '';
  @Output() searchEvent = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  } 
  handleSeachBrowse(e:any) {
   // let timeoutId: any;
   //   clearTimeout(timeoutId);
   // timeoutId = setTimeout(() => {
      this.searchEvent.emit(this.searchText);
   // }, 0);
  }

}
