import { Component } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { Router } from '@angular/router';

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
  constructor(private dataService: CommonServiceService,private router: Router)
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
  handleNavigation(id:string, type:string): void {
    switch(type){
      case 'name': this.router.navigate(['/main/personView', id]);
      break;
      case 'office': this.router.navigate(['/main/officeView',  id]);
      break;
      case 'org': this.router.navigate(['/main/orgView',  id]);
     }
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
