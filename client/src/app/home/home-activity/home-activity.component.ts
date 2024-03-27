import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-activity',
  templateUrl: './home-activity.component.html',
  styleUrl: './home-activity.component.scss'
})
export class HomeActivityComponent {
  @Input() activityData: any;

  constructor( private router: Router) { }
   

  navigateToPerson(id: string){
    this.router.navigate(['/main/personView', id]);

  }


}
