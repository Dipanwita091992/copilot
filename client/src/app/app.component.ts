import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonServiceService } from './common-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  apiUrl = 'http://localhost:3000/api';
  title = 'migration-angular-coworkee';
  public currentPath: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private commonservice: CommonServiceService, private cdr: ChangeDetectorRef) {
    this.router.navigate(['/login']);
    //  console.log(this.getData());
    // this.getData().subscribe((data) => {
    //   console.log(data);
    // });

  }
  ngAfterViewChecked() {
    this.currentPath = this.commonservice.currentPath;
    this.cdr.detectChanges();
  }
 

  getData() {
    let payload = [{
      action: "people", 
      data:[{field:"office_id",label: "office.name"}],
      method: "filters",
      tid: 60,
      type: "rpc"
    },{
      action: "people", 
      data:[{field: "organization_id", label: "organization.name"}],
      method: "filters",
      tid: 61,
      type: "rpc"
    }]
    return this.http.post(this.apiUrl,payload);
  }
}
