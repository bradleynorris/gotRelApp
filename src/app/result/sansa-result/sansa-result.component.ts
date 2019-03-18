import { Component, OnInit } from '@angular/core';


import { Result } from '../../result';
import { SANSARESULTS } from '../../mock-results';

@Component({
  selector: 'app-sansa-result',
  templateUrl: './sansa-result.component.html',
  styleUrls: ['./sansa-result.component.scss']
})
export class SansaResultComponent implements OnInit {

  results = SANSARESULTS;
  selectedResult: Result;
  onSelect(result: Result): void {
    this.selectedResult = result;
  }

  constructor() { }

  ngOnInit() {
  }

}
