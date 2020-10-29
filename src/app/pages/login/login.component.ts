import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  invalidLogin = false;

  blockedPanel = false;
  blockedDocument = false;

  // username;

  constructor(private router: Router,
              private fb:FormBuilder,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    
  }

  crearFormulario(){
    this.form = this.fb.group({
      username:     ['', Validators.required],
      password:     ['', Validators.required],
    })
  }

  blockDocument() {
    this.blockedDocument = true;
    setTimeout(() => {
        this.blockedDocument = false;
    }, 3000);
  }

  checkLogin(form: any) {
    (this.authenticationService.authenticate(form.value.username, form.value.password).subscribe(
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
