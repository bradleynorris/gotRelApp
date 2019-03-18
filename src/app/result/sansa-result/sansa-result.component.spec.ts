import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SansaResultComponent } from './sansa-result.component';

describe('SansaResultComponent', () => {
  let component: SansaResultComponent;
  let fixture: ComponentFixture<SansaResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SansaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SansaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
