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
  title = 'migration-angular-coworkee';
  public currentPath: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
    private commonservice: CommonServiceService, private cdr: ChangeDetectorRef) {
    this.router.navigate(['/login']);

  }
  ngAfterViewChecked() {
    this.currentPath = this.commonservice.currentPath;
    this.cdr.detectChanges();
  }
 

  getData() {
  }
}
