import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService){}

  canActivate(): Observable<boolean>  |boolean  {

    console.log('canActivate');
    return this.authService.validarToken();
  }


  canLoad(): Observable<boolean>  | boolean {

    console.log('canLoad');
    return this.authService.validarToken();
  }
}
