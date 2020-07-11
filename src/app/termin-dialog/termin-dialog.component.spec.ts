import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminDialogComponent } from './termin-dialog.component';

describe('TerminDialogComponent', () => {
  let component: TerminDialogComponent;
  let fixture: ComponentFixture<TerminDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
