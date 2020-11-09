import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAthleteComponent } from './filter-athlete.component';

describe('FilterAthleteComponent', () => {
  let component: FilterAthleteComponent;
  let fixture: ComponentFixture<FilterAthleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAthleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
