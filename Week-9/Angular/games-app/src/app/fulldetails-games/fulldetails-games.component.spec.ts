import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulldetailsGamesComponent } from './fulldetails-games.component';

describe('FulldetailsGamesComponent', () => {
  let component: FulldetailsGamesComponent;
  let fixture: ComponentFixture<FulldetailsGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulldetailsGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulldetailsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
