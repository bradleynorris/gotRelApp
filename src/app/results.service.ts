import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { SANSARESULTS, ARYARESULTS, BRANRESULTS, SAMRESULTS } from './mock-results';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() {}

  getSansaResults(): Observable<Result[]> {
    return of(SANSARESULTS);
  }

  getAryaResults(): Observable<Result[]> {
    return of(ARYARESULTS);
  }

  getBranResults(): Observable<Result[]> {
    return of(BRANRESULTS);
  }

  getSamResults(): Observable<Result[]> {
    return of(SAMRESULTS);
  }

}
