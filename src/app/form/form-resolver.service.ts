
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FormService } from './form.service';

@Injectable()
export class FormResolverService implements Resolve<string> {

  constructor(private formService: FormService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      return this.formService.getFormStructure().pipe(take(1));
  }
}
