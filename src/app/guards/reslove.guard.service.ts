import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { combineLatest, forkJoin, Observable } from "rxjs";
import { BaseService } from "../core/base.service";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ResloveGuardService implements Resolve<any>{
    constructor(private router: Router, private baseService: BaseService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
        let timeSeries = this.baseService.get('https://data.covid19india.org/v4/min/timeseries.min.json').pipe(map((res) => res));
        let mainData = this.baseService.get('https://data.covid19india.org/v4/min/data.min.json').pipe(map((res) => res));
        return forkJoin(timeSeries, mainData);
    }

}
