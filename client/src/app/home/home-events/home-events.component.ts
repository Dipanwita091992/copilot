import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrl: './home-events.component.scss'
})
export class HomeEventsComponent {
  range: string = 'upcoming';
  events: any;
  selected: string = 'upcoming';
  constructor(private http: HttpClient, private commonservice: CommonServiceService,) {
    this.getEventsData(this.selected);
  }

  getEventsData(type?: string) {
    const currentDate = new Date();
    const sevenDaysAgo = new Date();
    const upcomingDay  = new Date();
    sevenDaysAgo.setDate(currentDate.getDate() - 7);
    upcomingDay.setDate(currentDate.getDate() + 1);
    let payload = [{
      action: "events",
      data: [{}],
      method: "list",
    }]
    payload[0].data.pop();
    if (type === 'upcoming') {
     
      payload[0].data.push({ limit: 8, page: 1, start: 0, filter: [{ property: 'startDate', value: upcomingDay }], sort: [{ property: "date", direction: 'ASC' }], })
    } else if (type === 'past') {
      payload[0].data.push({ limit: 8, page: 1, start: 0, filter: [{ property: 'endDate', value: sevenDaysAgo }], sort: [{ property: "date", direction: 'DESC' }], })
    } else {
      payload[0].data.push({ limit: 8, page: 1, start: 0, filter: [{ property: 'startDate', value: sevenDaysAgo },{ property: 'endDate', value: upcomingDay }], sort: [{ property: "date", direction: 'DESC'}], })
    }

    this.commonservice.getEventsData(payload).subscribe((res: any) => {
      this.events = res[0].result.data;
    });
  }

  getYears(event: any) {
    return '25'
  }
  getfullname(event: any) {
    return event.firstname + ' ' + event.lastname;
  }
  handleEventClick() {
    if (this.selected === 'upcoming') {

      this.getEventsData('upcoming')
    }
    else if (this.selected === 'past') {

      this.getEventsData('past')
    }
    else {

      this.getEventsData('recent')
    }
  }

}
