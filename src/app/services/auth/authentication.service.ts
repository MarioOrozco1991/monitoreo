import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
     ) {}

}

export class JwtResponse {
  constructor(
    public jwttoken: string,
     ) {}

}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {
    // return this.httpClient.post<any>('http://172.21.26.175:5349/authenticate', {username, password}).pipe(
    // return this.httpClient.post<any>('biometric-explorer/authenticate', {username, password}).pipe(
    // return this.httpClient.post<any>('http://172.21.26.175:8090/biometric-explorer/authenticate', {username, password}).pipe(
    /*let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders = httpHeaders.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpHeaders = httpHeaders.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpHeaders = httpHeaders.append('Access-Control-Allow-Credentials', 'true');*/
    return this.httpClient.post<any>('http://172.21.26.175:8090/biometric-explorer/authenticate',
      {username, password}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const tokenStr = 'Bearer ' + userData.jwttoken;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )
    );
  }

  authenticateReimpHDD(username, password) {
    return this.httpClient.post<any>('http://172.21.26.175:8090/biometric-explorer/authenticate', {username, password}).pipe(
      map(
        userData => {
          const tokenStr = 'Bearer ' + userData.jwttoken;
          return userData;
        }
      )
    );
  }

  userLogged() {
    return sessionStorage.getItem('username');
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('office');
    sessionStorage.removeItem('machineIP');
    sessionStorage.removeItem('muni');
    sessionStorage.removeItem('hostname');
    sessionStorage.removeItem('cuiCiudadano');
    sessionStorage.removeItem('country');
    sessionStorage.removeItem('dept');
    window.location.reload();
  }
}
