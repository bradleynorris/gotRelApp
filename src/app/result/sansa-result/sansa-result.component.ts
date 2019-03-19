import { Component, OnInit } from '@angular/core';

import { Result } from '../../result';
import { ResultsService } from '../../results.service';

@Component({
  selector: 'app-sansa-result',
  templateUrl: './sansa-result.component.html',
  styleUrls: ['./sansa-result.component.scss']
})
export class SansaResultComponent implements OnInit {

  selectedResult: Result;
  results: Result[];

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.getSansaResults();
  }

  onSelect(result: Result): void {
    this.selectedResult = result;
  }

  getSansaResults(): void {
    this.resultsService.getSansaResults().subscribe(results => this.results = results);
  }

}
