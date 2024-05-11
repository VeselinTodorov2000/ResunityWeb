import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNotificationModalComponent } from './new-notification-modal.component';

describe('NewNotificationModalComponent', () => {
  let component: NewNotificationModalComponent;
  let fixture: ComponentFixture<NewNotificationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNotificationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewNotificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
