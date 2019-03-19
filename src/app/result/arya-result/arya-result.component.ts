import { Component, OnInit } from '@angular/core';

import { Result } from '../../result';
import { ResultsService } from '../../results.service';

@Component({
  selector: 'app-arya-result',
  templateUrl: './arya-result.component.html',
  styleUrls: ['./arya-result.component.scss']
})
export class AryaResultComponent implements OnInit {

  results: Result[];
  selectedResult: Result;


  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.getAryaResults();
  }

  onSelect(result: Result): void {
    this.selectedResult = result;
  }

  getAryaResults(): void {
    this.resultsService.getAryaResults().subscribe(results => this.results = results);
  }

}
