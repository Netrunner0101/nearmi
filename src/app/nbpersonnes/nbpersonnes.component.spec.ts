import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbpersonnesComponent } from './nbpersonnes.component';

describe('NbpersonnesComponent', () => {
  let component: NbpersonnesComponent;
  let fixture: ComponentFixture<NbpersonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbpersonnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbpersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
