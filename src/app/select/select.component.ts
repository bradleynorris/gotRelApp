import { MatButtonModule } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  char1: '';
  $e: '';
  buttonDisabled: boolean;

  onChange() {
    this.buttonDisabled = true;
  }

  constructor() { }

  ngOnInit() { }

}
