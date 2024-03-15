import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('dipanwita.c'),
    password: new FormControl('wvyrEDvxI')
  });
  apiUrl = 'http://localhost:3000/api';
  currentPath: string | undefined;
constructor(private router: Router,private route: ActivatedRoute,
  private commonservice:CommonServiceService,private http: HttpClient){}
ngAfterViewInit() {
    
  this.route.url.subscribe(segments => {
    this.currentPath = segments.map(segment => segment.path).join('/');
   this.commonservice.currentPath=this.currentPath;
 });
}

onLoginTap() {
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
let payload = [{
  action: "auth", 
 // data:[{username: this.loginForm.get('username')?.value, password: this.loginForm.get('password')?.value}] ,
 data:[{username: 'dipanwita.c', password: 'wvyrEDvxI'}],
  method: "login",

}]
 this.http.post(this.commonservice.apiUrl,payload, { headers },).subscribe((res:any) => {
  console.log(res);
  this.commonservice.sessionDetails=res[0].result;
  this.router.navigate(['/main']);
 });
  
}





}
