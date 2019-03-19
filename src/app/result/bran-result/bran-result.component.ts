import { Component, OnInit } from '@angular/core';

import { Result } from '../../result';
import { ResultsService } from '../../results.service';

@Component({
  selector: 'app-bran-result',
  templateUrl: './bran-result.component.html',
  styleUrls: ['./bran-result.component.scss']
})
export class BranResultComponent implements OnInit {
  
  results: Result[];
  selectedResult: Result;


  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.getBranResults();
  }

  onSelect(result: Result): void {
    this.selectedResult = result;
  }

  getBranResults(): void {
    this.resultsService.getBranResults().subscribe(results => this.results = results);
  }

}
