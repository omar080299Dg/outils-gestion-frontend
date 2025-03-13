import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmModalComponent } from './em-modal.component';

describe('EmModalComponent', () => {
  let component: EmModalComponent;
  let fixture: ComponentFixture<EmModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmModalComponent]
    });
    fixture = TestBed.createComponent(EmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
