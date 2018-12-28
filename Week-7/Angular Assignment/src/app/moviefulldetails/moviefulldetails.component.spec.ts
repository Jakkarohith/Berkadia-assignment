import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviefulldetailsComponent } from './moviefulldetails.component';

describe('MoviefulldetailsComponent', () => {
  let component: MoviefulldetailsComponent;
  let fixture: ComponentFixture<MoviefulldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviefulldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviefulldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
