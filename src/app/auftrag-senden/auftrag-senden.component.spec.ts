import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragSendenComponent } from './auftrag-senden.component';

describe('AuftragSendenComponent', () => {
  let component: AuftragSendenComponent;
  let fixture: ComponentFixture<AuftragSendenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuftragSendenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragSendenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
