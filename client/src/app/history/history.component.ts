import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  zoom = 8;
  center: any = { lat: 51.678418, lng: 7.809007 };

}
