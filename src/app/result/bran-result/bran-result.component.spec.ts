import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranResultComponent } from './bran-result.component';

describe('BranResultComponent', () => {
  let component: BranResultComponent;
  let fixture: ComponentFixture<BranResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
