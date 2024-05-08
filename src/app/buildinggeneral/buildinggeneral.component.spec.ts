import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildinggeneralComponent } from './buildinggeneral.component';

describe('BuildinggeneralComponent', () => {
  let component: BuildinggeneralComponent;
  let fixture: ComponentFixture<BuildinggeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildinggeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildinggeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
