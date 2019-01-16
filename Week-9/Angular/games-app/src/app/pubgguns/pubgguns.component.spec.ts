import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubggunsComponent } from './pubgguns.component';

describe('PubggunsComponent', () => {
  let component: PubggunsComponent;
  let fixture: ComponentFixture<PubggunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubggunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubggunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
