import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamResultComponent } from './sam-result.component';

describe('SamResultComponent', () => {
  let component: SamResultComponent;
  let fixture: ComponentFixture<SamResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
