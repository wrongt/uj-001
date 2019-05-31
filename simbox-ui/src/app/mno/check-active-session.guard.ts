import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MNOService } from './mno.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckActiveSessionGuard implements CanActivate {
  MNOService: any;
  constructor(private api: MNOService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.MNOService.MnoId().pipe(map(x => {
      if (x!=0) {
        this.router.navigate(['/webphone']);
        return true;
      } else {
        this.router.navigate(['busy']);
        return false;
      }
    }));
  }
}