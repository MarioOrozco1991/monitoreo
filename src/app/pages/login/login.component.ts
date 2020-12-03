import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { NbAuthService, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { PerfilComponenteService } from './../../services/perfil-componente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent {

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router, 
              private perfilComponenteService: PerfilComponenteService) {
    super(service, options, cd, router);
  }

  login(): void {
    this.perfilComponenteService.getPerfilComponentes(this.user.username).subscribe((respuesta) => {
      localStorage.setItem('perfilComponentes', JSON.stringify(respuesta));  
      localStorage.setItem('cui', this.user.username);
      super.login();
    });
  }


}
