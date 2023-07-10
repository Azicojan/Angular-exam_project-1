import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseveranceComponent } from './perseverance.component';

describe('PerseveranceComponent', () => {
  let component: PerseveranceComponent;
  let fixture: ComponentFixture<PerseveranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerseveranceComponent]
    });
    fixture = TestBed.createComponent(PerseveranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
