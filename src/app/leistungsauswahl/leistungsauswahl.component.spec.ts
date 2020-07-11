import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungsauswahlComponent } from './leistungsauswahl.component';

describe('LeistungsauswahlComponent', () => {
  let component: LeistungsauswahlComponent;
  let fixture: ComponentFixture<LeistungsauswahlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeistungsauswahlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeistungsauswahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
