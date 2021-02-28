import{ Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../model/auth.service';
import { RestService } from '../model/rest.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
        if(!this.authService.authenticated){
            this.router.navigateByUrl('admin/auth');
            return false;
            
        }
        return true;

    }

}