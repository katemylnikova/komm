import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonenangabenComponent } from './personenangaben.component';

describe('PersonenangabenComponent', () => {
  let component: PersonenangabenComponent;
  let fixture: ComponentFixture<PersonenangabenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonenangabenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonenangabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
