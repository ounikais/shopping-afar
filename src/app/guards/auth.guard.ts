import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedIn = false;
  private role: string = '';

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn !== true){
        this.router.navigate(['/'])
      }
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      if(this.role !== "admin"){
          this.router.navigate(['/'])
      }
      return true;
  }

}
