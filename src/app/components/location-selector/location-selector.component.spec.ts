import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSelectorComponentComponent } from './location-selector.component';

describe('LocationSelectorComponentComponent', () => {
  let component: LocationSelectorComponentComponent;
  let fixture: ComponentFixture<LocationSelectorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationSelectorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationSelectorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
