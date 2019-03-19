import { Component, OnInit } from '@angular/core';

import { Result } from '../../result';
import { ResultsService } from '../../results.service';

@Component({
  selector: 'app-sam-result',
  templateUrl: './sam-result.component.html',
  styleUrls: ['./sam-result.component.scss']
})
export class SamResultComponent implements OnInit {

  results: Result[];
  selectedResult: Result;


  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.getSamResults();

  }

  onSelect(result: Result): void {
    this.selectedResult = result;
  }

  getSamResults(): void {
    this.resultsService.getSamResults().subscribe(results => this.results = results);
  }

}
