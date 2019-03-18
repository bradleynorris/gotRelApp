import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AryaResultComponent } from './arya-result.component';

describe('AryaResultComponent', () => {
  let component: AryaResultComponent;
  let fixture: ComponentFixture<AryaResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AryaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AryaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
