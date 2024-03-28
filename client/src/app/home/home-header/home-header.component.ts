import { Component } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {
  items: any;
  time: any
  manager:string = '../../../asset/1.jpg';
  loggedinUser:any;
  currentTime: Date | undefined;
  constructor(private dataService: CommonServiceService)
   { 
    this.loggedinUser = this.dataService.sessionDetails.user;
    this.time = setInterval(() => {
      this.updateTime();
    }, 0);
   }
   ngOnDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.time);
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
    this.time = this.getTime();
   }
   updateTime() {
    this.currentTime = new Date();
  }
}
