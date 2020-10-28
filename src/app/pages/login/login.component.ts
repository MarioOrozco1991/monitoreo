import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  blockedPanel = false;
  blockedDocument = false;

  // username;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    
  }

  blockDocument() {
    this.blockedDocument = true;
    setTimeout(() => {
        this.blockedDocument = false;
    }, 3000);
  }

  checkLogin() {
    (this.authenticationService.authenticate(this.username, this.password ).subscribe(
      data => {
        // this.router.navigate(['requisitos']);
        console.log('autenticado');
        this.router.navigate(['/pages/acciones']);
        this.invalidLogin = false;
      },
      error => {
        // this.invalidLogin = true;
        // this.username = '';
        // this.password = '';
        console.log('error de autenticacion');
      }
    )
    );
  }
}
