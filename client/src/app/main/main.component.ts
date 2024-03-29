import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  currentPath:string='';
  selected:string='home';
  public isCollapsed = true;
  loggedinUser: any;
  constructor(private router: Router,private route: ActivatedRoute,private commonservice:CommonServiceService){
    this.loggedinUser = this.commonservice.sessionDetails.user;
  }
  ngAfterViewInit() {
    
    this.route.url.subscribe(segments => {
      this.currentPath = segments.map(segment => segment.path).join('/');
     this.commonservice.currentPath=this.currentPath;
   });
   
  }
  collapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  logoutUser() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
  clickprofile(id: any) {
    this.router.navigate(['/main/personView', id]);
  };

}
