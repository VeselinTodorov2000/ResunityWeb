import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingselectionComponent } from './buildingselection.component';

describe('BuildingselectionComponent', () => {
  let component: BuildingselectionComponent;
  let fixture: ComponentFixture<BuildingselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
