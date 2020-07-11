import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungsueberblickComponent } from './leistungsueberblick.component';

describe('LeistungsueberblickComponent', () => {
  let component: LeistungsueberblickComponent;
  let fixture: ComponentFixture<LeistungsueberblickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeistungsueberblickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeistungsueberblickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
