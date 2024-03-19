import { Component } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {
  items: any;
  time= new Date();
  manager:string = '../../../asset/1.jpg';
  loggedinUser:any;
  constructor(private dataService: CommonServiceService)
   { 
    this.loggedinUser = this.dataService.sessionDetails.user;
   }

   getGreeting(){
    let hour = this.time.getHours();
    if(hour<12){
      return "Good morning";
    }else if(hour>=12 && hour<17){
      return "Good afternoon";
    }else{
      return "Good evening";
    }
   }
   getTime(){
    return new Date();
   }
   ngDoCheck(){
    this.getTime();
   }
}
